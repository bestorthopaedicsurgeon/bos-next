-- CreateEnum
CREATE TYPE "AdMediaType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateEnum
CREATE TYPE "AdCoverage" AS ENUM ('SITE_WIDE', 'SELECTED_PLACEMENTS');

-- CreateEnum
CREATE TYPE "AdCampaignStatus" AS ENUM ('DRAFT', 'PENDING_REVIEW', 'SCHEDULED', 'ACTIVE', 'PAUSED', 'ENDED', 'REJECTED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "Advertiser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactName" TEXT,
    "contactEmail" TEXT,
    "websiteUrl" TEXT NOT NULL,
    "abn" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Advertiser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdCampaign" (
    "id" TEXT NOT NULL,
    "advertiserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mediaType" "AdMediaType" NOT NULL,
    "coverage" "AdCoverage" NOT NULL DEFAULT 'SELECTED_PLACEMENTS',
    "desktopImagePath" TEXT,
    "mobileImagePath" TEXT,
    "videoPath" TEXT,
    "posterPath" TEXT,
    "captionsPath" TEXT,
    "originalFileName" TEXT,
    "altText" TEXT NOT NULL,
    "destinationUrl" TEXT NOT NULL,
    "ctaLabel" TEXT NOT NULL DEFAULT 'Learn more',
    "status" "AdCampaignStatus" NOT NULL DEFAULT 'DRAFT',
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "timezone" TEXT NOT NULL DEFAULT 'Australia/Perth',
    "priority" INTEGER NOT NULL DEFAULT 0,
    "weight" INTEGER NOT NULL DEFAULT 1,
    "loopVideo" BOOLEAN NOT NULL DEFAULT true,
    "complianceNotes" TEXT,
    "complianceAcceptedAt" TIMESTAMP(3),
    "reviewedById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdAssignment" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "placementKey" TEXT NOT NULL,
    "context" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdDailyMetric" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "placementKey" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "videoStarts" INTEGER NOT NULL DEFAULT 0,
    "videoCompletes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdDailyMetric_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Advertiser_name_idx" ON "Advertiser"("name");

-- CreateIndex
CREATE INDEX "AdCampaign_advertiserId_idx" ON "AdCampaign"("advertiserId");

-- CreateIndex
CREATE INDEX "AdCampaign_status_startsAt_endsAt_idx" ON "AdCampaign"("status", "startsAt", "endsAt");

-- CreateIndex
CREATE INDEX "AdCampaign_coverage_idx" ON "AdCampaign"("coverage");

-- CreateIndex
CREATE UNIQUE INDEX "AdAssignment_campaignId_placementKey_key" ON "AdAssignment"("campaignId", "placementKey");

-- CreateIndex
CREATE INDEX "AdAssignment_placementKey_isActive_idx" ON "AdAssignment"("placementKey", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "AdDailyMetric_campaignId_placementKey_date_key" ON "AdDailyMetric"("campaignId", "placementKey", "date");

-- CreateIndex
CREATE INDEX "AdDailyMetric_campaignId_date_idx" ON "AdDailyMetric"("campaignId", "date");

-- CreateIndex
CREATE INDEX "AdDailyMetric_date_idx" ON "AdDailyMetric"("date");

-- AddForeignKey
ALTER TABLE "AdCampaign" ADD CONSTRAINT "AdCampaign_advertiserId_fkey" FOREIGN KEY ("advertiserId") REFERENCES "Advertiser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdAssignment" ADD CONSTRAINT "AdAssignment_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "AdCampaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdDailyMetric" ADD CONSTRAINT "AdDailyMetric_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "AdCampaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
