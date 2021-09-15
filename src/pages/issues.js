import React from "react"
import axios from "axios"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Issues() {
  const [body, setBody] = React.useState([])
  const [loading, setloading] = React.useState(true)

  const fetchData = async () => {
    try {
      //   const { data } = await axios.get("../api/serverless")
      //senza "../" il fetch sará in domain.com/fetch/api/serverless (che non esiste!! )
      const { data } = await axios.get("../api/getAllEmails")
      setBody(data)
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
      <Layout>
        <center>
          <i>Emails are Loading...</i>
        </center>
      </Layout>
    )
  }

  return (
    <Layout>
      <center>
        All the Emails
        {body &&
          body.map(email => {
            return (
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
                <article style={{ transform: "scale(0.6)" }}>
                  <div
                    style={{ height: "5rem", overflow: "hidden" }}
                    dangerouslySetInnerHTML={{ __html: email.body }}
                  ></div>
                </article>
                <Link to={`/app/issues/${email.id}`}>
                  <h2>Read more...</h2>
                </Link>
              </div>
            )
          })}
      </center>
    </Layout>
  )
}
