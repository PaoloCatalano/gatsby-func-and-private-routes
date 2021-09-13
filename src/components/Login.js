import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

const Login = () => {
  const [user, setUser] = useState({ username: ``, password: `` })

  const handleUpdate = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin(user)
  }
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/app/details`)
    }
  }, [])
  return (
    <View title="Log In">
      <Form
        handleUpdate={e => handleUpdate(e)}
        handleSubmit={e => handleSubmit(e)}
      />
    </View>
  )
}

export default Login
