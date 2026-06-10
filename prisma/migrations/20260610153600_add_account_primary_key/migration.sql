-- AlterTable
ALTER TABLE "Account" ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("provider", "providerAccountId");

-- DropIndex
DROP INDEX "Account_provider_providerAccountId_key";
