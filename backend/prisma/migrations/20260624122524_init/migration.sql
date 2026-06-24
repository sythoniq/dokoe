-- CreateTable
CREATE TABLE "Characters" (
    "characterId" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "characterPosX" DOUBLE PRECISION NOT NULL,
    "characterPosY" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("characterId")
);

-- CreateTable
CREATE TABLE "Scores" (
    "scoreId" SERIAL NOT NULL,
    "playerName" TEXT NOT NULL,
    "timeMs" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Scores_pkey" PRIMARY KEY ("scoreId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_characterName_key" ON "Characters"("characterName");
