import React from "react"
import View from "./View"
import { getCurrentUser, logout } from "../utils/auth"

const Details = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="Your Details">
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
      <div style={{ margin: "auto 3rem" }}>
        <button onClick={() => logout(`/app/login`)}>Log Out</button>
      </div>
    </View>
  )
}

export default Details
