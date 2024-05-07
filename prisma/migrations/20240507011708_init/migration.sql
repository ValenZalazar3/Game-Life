-- CreateTable
CREATE TABLE "goal" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR NOT NULL,
    "completedAt" TIMESTAMP,

    CONSTRAINT "goal_pkey" PRIMARY KEY ("id")
);
