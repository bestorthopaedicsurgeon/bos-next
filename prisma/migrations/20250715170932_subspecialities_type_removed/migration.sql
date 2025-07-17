/*
  Warnings:

  - The `subspecialities` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DoctorProfile" DROP COLUMN "subspecialities",
ADD COLUMN     "subspecialities" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- DropEnum
DROP TYPE "Subspeciality";
