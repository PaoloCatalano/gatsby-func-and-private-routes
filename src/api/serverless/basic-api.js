const items = require("./data")

export default function serverless(req, res) {
  res.status(200).json(items)
}
