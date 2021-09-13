const express = require("express")
const app = express()
const { logger } = require("./middleware/logger")

app.use(logger)

app.get("/", (req, res) => {
  res.status(200).json({ success: true, page: "express.js" })
})

app.post("/", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: "no name" })
  }
  res.status(201).json({ success: true, person: name })
})

module.exports = app
