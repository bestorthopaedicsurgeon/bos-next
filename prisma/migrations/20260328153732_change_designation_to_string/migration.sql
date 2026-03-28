/*
  Warnings:

  - The `designation` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DoctorProfile" DROP COLUMN "designation",
ADD COLUMN     "designation" TEXT;

-- DropEnum
DROP TYPE "Designation";
