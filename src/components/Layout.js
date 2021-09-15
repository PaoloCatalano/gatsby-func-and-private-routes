import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        grid: "auto 1fr auto / 1fr",
        placeItems: "center",
        width: "98vw",
        height: "100vh",
        boxSizing: "content-box",
      }}
    >
      <Navbar />

      {children}
      <Footer />
    </div>
  )
}
