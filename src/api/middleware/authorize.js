const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === "mike") {
    req.user = { name: "mike", id: 1 }
    console.log("authorize")
    next()
  } else {
    console.log("unauthorize")
    res.status(401).send("Unauthorize")
  }
}

module.exports = authorize
