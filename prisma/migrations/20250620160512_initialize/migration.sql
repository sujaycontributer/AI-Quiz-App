-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizData" (
    "id" SERIAL NOT NULL,
    "totalquiz" INTEGER,
    "questionsSolved" INTEGER,
    "totalAccuracy" INTEGER,
    "accuracy" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "QuizData_id_key" ON "QuizData"("id");
