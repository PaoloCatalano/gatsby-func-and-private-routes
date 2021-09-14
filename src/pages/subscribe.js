import React from "react"
import Layout from "../components/Layout"
import axios from "axios"

export default function Subscribe() {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    try {
      await axios.post("/api/newsletters", { email })
      setEmail("")
      setError(false)
      setSuccess(true)
      setSending(false)
    } catch (error) {
      console.log(error)
      setError(true)
      setSuccess(false)
      setSending(false)
    }
  }

  React.useEffect(() => {
    setError(() => {
      if (email === "") {
        return false
      }
    })
  }, [email])

  if (success) {
    return (
      <Layout>
        <section style={{ display: "grid", placeItems: "center" }}>
          <h1 style={{ color: "green" }}>Thank u 4 subscribing!</h1>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <section
        style={{
          display: "grid",
          placeItems: "start center",
          grid: "0.5fr 1fr / 1fr",
        }}
      >
        <header
          style={{
            textAlign: "center",
            color: "green",
            textTransform: "uppercase",
            marginTop: "7rem",
            height: "10vh",
          }}
        >
          <h1>Subscribe to my newsletter</h1>
        </header>
        <form
          //   action="/api/newsletters"
          //   method="POST"
          onSubmit={handleSubmit}
          style={{
            flexDirection: "column",
            display: "flex",
            width: "25vw",
          }}
        >
          <input
            style={{ height: "2rem" }}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && (
            <p style={{ color: "red" }}>Something went wrong...! Re-try!</p>
          )}
          <input
            style={{
              height: "2rem",
              backgroundColor: "green",
              color: "white",
              borderRadius: " 0 0 50% 50%",
            }}
            type="submit"
            value="Subscribe"
            disabled={sending}
          />
        </form>
      </section>
    </Layout>
  )
}
