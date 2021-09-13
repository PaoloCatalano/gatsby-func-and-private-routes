const logger = (req, res, next) => {
  console.log(req.method, req.url)
  // res.send("Middleware")
  next()
}
const loggerNOexpress = (req, res) => {
  console.log(req.method, req.url)
  // res.send("Middleware")
}

module.exports = { logger, loggerNOexpress }
