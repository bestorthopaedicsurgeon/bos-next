import { z } from "zod";

// --- Enums ---
export const DayOfWeekEnum = z.enum([
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
]);

export const LocationTypeEnum = z.enum(["ONLINE", "CLINIC"]);

export const DesignationEnum = z.enum(["DOCTOR", "SURGEON", "GENERAL"]);

// --- Sub-Schemas ---
export const DoctorAvailabilitySchema = z.object({
  dayOfWeek: DayOfWeekEnum,
  startTime: z.string(),
  endTime: z.string(),
  location: LocationTypeEnum,
  clinicName: z.string().nullable().optional(),
});

export const SpecificAvailabilitySchema = z.object({
  date: z.string().or(z.date()), // Date string or Date object
  isAvailable: z.boolean(),
  startTime: z.string().nullable().optional(),
  endTime: z.string().nullable().optional(),
  location: LocationTypeEnum.nullable().optional(),
  clinicName: z.string().nullable().optional(),
});

// --- Main Schemas ---
export const DoctorProfileSchema = z.object({
  title: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  experience: z.number().nullable().optional(),
  designation: DesignationEnum.nullable().optional(),
  about: z.string().nullable().optional(),
  practices: z.any().nullable().optional(), // Json in Prisma
  subspecialities: z.array(z.string()).optional(),
  registrationsAssociations: z.array(z.string()).optional(),
  qualifications: z.array(z.string()).optional(),
  awardsPublications: z.array(z.string()).optional(),
  hospitalAffiliations: z.any().nullable().optional(), // Json in Prisma
  location: z.string().nullable().optional(),
  officialEmail: z.string().email().nullable().optional(),
  userId: z.string().optional(),
  doctorAvailability: z.array(DoctorAvailabilitySchema).optional(),
  specificAvailability: z.array(SpecificAvailabilitySchema).optional(),
});

export type DoctorProfileInput = z.infer<typeof DoctorProfileSchema>;
