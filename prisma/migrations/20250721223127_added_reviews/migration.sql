-- CreateTable
CREATE TABLE "DoctorReview" (
    "id" SERIAL NOT NULL,
    "professionalism" INTEGER NOT NULL,
    "punctuality" INTEGER NOT NULL,
    "helpfulness" INTEGER NOT NULL,
    "knowledge" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DoctorReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DoctorReview_userId_doctorId_key" ON "DoctorReview"("userId", "doctorId");

-- AddForeignKey
ALTER TABLE "DoctorReview" ADD CONSTRAINT "DoctorReview_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorReview" ADD CONSTRAINT "DoctorReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
