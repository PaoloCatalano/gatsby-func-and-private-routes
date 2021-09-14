require("dotenv").config()
const axios = require("axios")
const { get_Method_Time } = require("./middleware/util-time")

export default async function subscription(req, res) {
  const method = req.method
  const email = req.body
  get_Method_Time(req)

  if (method !== "POST") {
    res.status(405).json({ mgs: "Only POST requests allowed!" })
  }
  if (!email) {
    res.status(400).json({ mgs: "Only POST requests allowed!" })
  }

  try {
    const data = await axios.post(
      "https://api.buttondown.email/v1/subscribers",
      email,
      {
        headers: {
          Authorization: `Token ${process.env.BUTTONDOWN_KEY}`,
        },
      }
    )
    console.log(data)
    res.status(201).end()
  } catch (error) {
    console.log(error)
    res.status(400).json({ mgs: error.response.data })
  }
}
