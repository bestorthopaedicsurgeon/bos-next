import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendAppointmentConfirmation, sendAppointmentNotificationToDoctor } from '@/lib/services/emailService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      doctorId,
      doctor_name,
      clinic_address,
      consultType,
      slot,
      fname,
      lname,
      email,
      phone,
      age,
      symptoms,
      message
    } = body;

    if (!email || !fname || !lname) {
      return NextResponse.json(
        { success: false, error: 'Patient email and name are required' },
        { status: 400 }
      );
    }

    // 1. Find the doctor to get their official email
    let doctor = null;
    if (doctorId) {
      doctor = await prisma.doctorProfile.findUnique({
        where: { id: Number(doctorId) },
        include: { user: true }
      });
    } else if (doctor_name) {
      doctor = await prisma.doctorProfile.findFirst({
        where: { 
          name: { 
            contains: doctor_name,
            mode: 'insensitive'
          } 
        },
        include: { user: true }
      });
    }

    if (!doctor) {
      return NextResponse.json(
        { success: false, error: 'Doctor not found' },
        { status: 404 }
      );
    }
    const doctorData = doctor as any;
    const doctorRecipientEmail = doctorData.officialEmail || doctor.user?.email;
    if (!doctorRecipientEmail) {
      return NextResponse.json(
        { success: false, error: 'Doctor has no email configured' },
        { status: 400 }
      );
    }

    // 2. Send notification to Doctor/Secretary
    await sendAppointmentNotificationToDoctor(doctorRecipientEmail, {
      surgeonName: doctorData.name || doctor_name,
      patientName: `${fname} ${lname}`,
      patientEmail: email,
      patientPhone: phone,
      date: slot.split(',')[0], // Primitive parsing for now
      time: slot.split(',')[1]?.trim() || slot,
      location: clinic_address || doctorData.location || 'Clinic',
      consultationType: consultType,
      symptoms,
      message
    });

    // 3. Send confirmation to Patient
    await sendAppointmentConfirmation(email, {
      patientName: `${fname} ${lname}`,
      surgeonName: doctorData.name || doctor_name,
      date: slot.split(',')[0],
      time: slot.split(',')[1]?.trim() || slot,
      location: clinic_address || doctor.location || 'Clinic',
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Appointment booked and notifications sent' 
    });

  } catch (error: any) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to book appointment' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
