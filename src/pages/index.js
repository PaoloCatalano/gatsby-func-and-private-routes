import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <center style={{ paddingTop: "10rem", color: "red" }}>
      <h1>FUNCTIONS AND EXPERIMENTS</h1>

      <h2>
        <Link to="/app/login">Go to Login Page</Link>
      </h2>
      <h2>
        <Link to="/api/handler">Go to API Page</Link>
      </h2>
    </center>
  )
}
