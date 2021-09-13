import fetch from "node-fetch"

export default async function randomPerson(req, res) {
  const response = await fetch(
    `https://randomuser.me/api?results=${req.params.quantity}`
  ).then(x => x.json())

  return res.status(200).json(response)
}
