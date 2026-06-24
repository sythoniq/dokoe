const { Router } = require("express");
const app = Router()

const prisma = require("../lib/prisma.js")

app.get("/characters", async (req, res) => {
  try {
    const characters = await prisma.characters.findMany({
      select: {
        characterId: true,
        characterName: true,
      }
    })
    res.json(characters)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch characters" })
  }
})

const tolernace = 0.04

app.post("/guess", async (req, res) => {
  const { characterName, x, y } = req.body

  if (!characterName || x == null || y == null) {
    return res.status(400).json({ error: "Missing characterName, x, or y" })
  }

  try {
    const character = await prisma.characters.findUnique({
      where: { characterName }
    })

    if (!character) {
      return res.status(404).json({ error: "Character not found" })
    }

    const dx = Math.abs(character.characterPosX - x)
    const dy = Math.abs(character.characterPosY - y)
    const hit = dx <= tolernace && dy <= tolerance

    res.json({
      correct: hit,
      characterName,
      ...(hit && {
        posX: character.characterPosX,
        posY: character.characterPosY,
      })
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Guess validation failed" })
  }
})

app.get("/scores", async (req, res) => {
  try {
    const scores = await prisma.scores.findMany({
      orderBy: { timeMs: "asc" },
      take: 10,
    })
    res.json(scores)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch scores" })
  }
})

app.post("/scores", async (req, res) => {
  const { playerName, timeMs } = req.body

  if (!playerName || timeMs == null) {
    return res.status(400).json({ error: "Missing playerName or timeMs" })
  }

  try {
    const score = await prisma.scores.create({
      data: { playerName, timeMs }
    })
    res.status(201).json(score)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to save score" })
  }
})

module.exports = app;
