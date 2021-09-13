const express = require("express")
const app = express()
module.exports = app

const { logger } = require("./middleware/logger")
const data = require("./data")

app.use(logger)

app.get("/", (req, res) => {
  console.log(data)
  res.status(200).json({ data })
})

app.post("/", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: "no name" })
  }
  res.status(201).json({ success: true, people: [...data, name] })
})

module.exports = app
