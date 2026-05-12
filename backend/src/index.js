const express = require("express")
const index = express()

index.get("/", (req, res) => console.log(req))

index.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } 
  console.log('running')
})
