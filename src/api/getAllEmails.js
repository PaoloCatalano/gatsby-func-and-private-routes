require("dotenv").config()
const axios = require("axios")
const { get_Method_Time } = require("./middleware/util-time")

export default async function subscription(req, res) {
  get_Method_Time(req)
  const method = req.method

  if (method !== "GET") {
    res.status(405).json({ mgs: "Only Get requests allowed!" })
  }

  try {
    const { data } = await axios.get("https://api.buttondown.email/v1/emails", {
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_KEY}`,
      },
    })

    res.status(200).json(data.results)
  } catch (error) {
    console.log(error)
    res.status(400).json({ mgs: error.response.data })
  }
}
