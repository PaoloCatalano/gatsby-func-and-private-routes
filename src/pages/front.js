import React from "react"
import axios from "axios"
import Layout from "../components/Layout"

export default function Front() {
  const [body, setBody] = React.useState([])
  const [loading, setloading] = React.useState(true)

  const fetchData = async () => {
    try {
      //   const { data } = await axios.get("../api/serverless")
      //senza "../" il fetch sará in domain.com/fetch/api/serverless (che non esiste!! )
      const { data } = await axios.get("../api/serverless/basic-api")
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
          <i>The Front-End is Loading...</i>
        </center>
      </Layout>
    )
  }

  return (
    <Layout>
      <center>
        Front-End
        {/* <h1>{body}</h1> */}
        {body &&
          body.map(item => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <strong>€{item.price}</strong>
              <p>
                <a href={item.image.url}>go to Image</a>
              </p>
            </div>
          ))}
      </center>
    </Layout>
  )
}
