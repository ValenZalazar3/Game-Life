-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_goalId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "goalId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
