-- CreateTable
CREATE TABLE "Characters" (
    "characterId" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "characterPosX" DOUBLE PRECISION NOT NULL,
    "characterPosY" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("characterId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_characterName_key" ON "Characters"("characterName");
