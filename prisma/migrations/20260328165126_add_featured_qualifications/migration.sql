-- AlterTable
ALTER TABLE "DoctorProfile" ADD COLUMN     "featuredQualifications" TEXT[] DEFAULT ARRAY[]::TEXT[];
