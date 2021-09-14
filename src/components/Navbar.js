import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <center>
        <h1>Functions and Experiments</h1>
        <span>
          <Link to="/" aria-label="to to home">
            🚪🚶
          </Link>
        </span>
      </center>
    </nav>
  )
}
