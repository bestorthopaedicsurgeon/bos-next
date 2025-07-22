/*
  Warnings:

  - You are about to drop the column `clinicAddress` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `practiceName` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `practicePhone` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `DoctorProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DoctorProfile" DROP COLUMN "clinicAddress",
DROP COLUMN "practiceName",
DROP COLUMN "practicePhone",
DROP COLUMN "state",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "registrationCompleted" BOOLEAN NOT NULL DEFAULT false;
