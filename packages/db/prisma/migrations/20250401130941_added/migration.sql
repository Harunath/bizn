-- AlterTable
ALTER TABLE "Administrator" ADD COLUMN     "address" JSONB;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" JSONB;

-- CreateTable
CREATE TABLE "BusinessDetails" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "panNumber" TEXT,
    "gstNumber" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BusinessDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessDetails_panNumber_key" ON "BusinessDetails"("panNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessDetails_gstNumber_key" ON "BusinessDetails"("gstNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessDetails_userId_key" ON "BusinessDetails"("userId");

-- AddForeignKey
ALTER TABLE "BusinessDetails" ADD CONSTRAINT "BusinessDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
