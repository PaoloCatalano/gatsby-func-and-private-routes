require("dotenv").config()
const axios = require("axios")

export default async function playlist(req, res) {
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=status&playlistId=PLzc14R1Ecr9CummAOR3Dm9z3CT2iJ07WC&maxResults=50&key=${process.env.TY_KEY}`

  const method = req.method

  if (method !== "GET") {
    res.status(405).json({ mgs: "Only Get requests allowed!" })
  }

  try {
    const { data } = await axios.get(url)

    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(400).json({ mgs: error })
  }
}
