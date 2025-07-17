/*
  Warnings:

  - The `registrationsAssociations` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `qualifications` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `awardsPublications` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hospitalAffiliations` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DoctorProfile" DROP COLUMN "registrationsAssociations",
ADD COLUMN     "registrationsAssociations" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "qualifications",
ADD COLUMN     "qualifications" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "awardsPublications",
ADD COLUMN     "awardsPublications" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "hospitalAffiliations",
ADD COLUMN     "hospitalAffiliations" JSONB;
