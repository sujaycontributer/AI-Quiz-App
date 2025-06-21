/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `QuizData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `QuizData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizData" ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "totalquiz" SET DEFAULT 0,
ALTER COLUMN "questionsSolved" SET DEFAULT 0,
ALTER COLUMN "totalAccuracy" SET DEFAULT 0,
ALTER COLUMN "accuracy" SET DEFAULT 0,
ADD CONSTRAINT "QuizData_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "QuizData_userId_key" ON "QuizData"("userId");

-- AddForeignKey
ALTER TABLE "QuizData" ADD CONSTRAINT "QuizData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
