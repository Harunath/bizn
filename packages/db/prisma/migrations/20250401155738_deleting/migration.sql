-- AlterTable
ALTER TABLE "Administrator" ADD COLUMN     "deactivated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deactivated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;
