import React from "react"
import axios from "axios"
import { useLocation } from "@reach/router"

export default function SingleIssues(props) {
  const [email, setEmail] = React.useState([])
  const [loading, setloading] = React.useState(true)

  const baseUrl = useLocation().origin

  console.log(baseUrl)

  const fetchData = async () => {
    try {
      //   const { data } = await axios.get("../api/serverless")
      //senza "../" il fetch sará in domain.com/fetch/api/serverless (che non esiste!! )
      const { data } = await axios.get(`${baseUrl}/api/emails/${props.id}
`)
      setEmail(data)
      setloading(false)
    } catch (error) {
      console.log("the error is:" + error)
      setloading(false)
    }
  }
  React.useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <center>
        <i>The Email is Loading...</i>
      </center>
    )
  }

  return (
    <center>
      Email:
      <div
        key={email.id}
        style={{
          //   width: "98vw",
          //   maxWidth: "1000px",
          backgroundColor: "lightgrey",
          margin: "2rem 0",
        }}
      >
        <h1>{email.subject}</h1>
        <article>
          <div
            style={{ width: "75vw", maxWidth: "1000px", padding: "3rem" }}
            dangerouslySetInnerHTML={{ __html: email.body }}
          ></div>
        </article>
      </div>
    </center>
  )
}
