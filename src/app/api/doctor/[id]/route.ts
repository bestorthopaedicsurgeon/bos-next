import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: Params) {
  const { id } = context.params;

  // Sample data
  const doctor = {
    id,
    name: `Dr. Example #${id}`,
    specialty: 'General Practice',
  };

  return NextResponse.json(doctor);
}