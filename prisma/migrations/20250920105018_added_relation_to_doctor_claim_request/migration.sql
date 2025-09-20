-- AddForeignKey
ALTER TABLE "DoctorClaimRequest" ADD CONSTRAINT "DoctorClaimRequest_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorClaimRequest" ADD CONSTRAINT "DoctorClaimRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
