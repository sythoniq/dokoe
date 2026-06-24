const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const game = require("./routes/game.js")

app.use("/game", game);

app.listen(3000, (err) => {
  if (err) console.error(err)
  console.log("Dokoe backend running on port 3000")
})
