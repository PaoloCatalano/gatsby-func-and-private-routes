import React from "react"
import { form, form__label, form__input, form__button } from "./form.module.css"
import { navigate } from "@reach/router"
import { isLoggedIn } from "../../utils/auth"

export default function Form({ handleSubmit, handleUpdate }) {
  const [isPressed, setisPressed] = React.useState(false)
  return (
    <form
      className={form}
      method="post"
      onSubmit={event => {
        handleSubmit(event)
        if (isLoggedIn()) {
          navigate(`/app/details`)
        } else {
          setisPressed(true)
        }
      }}
    >
      <p>
        For this demo, please log in with the username <code>gatsby</code> and
        the password <code>demo</code>.
      </p>
      <label className={form__label}>
        Username
        <input
          className={form__input}
          type="text"
          name="username"
          onChange={handleUpdate}
          required
        />
      </label>
      <label className={form__label}>
        Password
        <input
          className={form__input}
          type="password"
          name="password"
          onChange={handleUpdate}
          required
        />
      </label>
      {!isLoggedIn() && isPressed && (
        <p style={{ color: "red" }}>Wrong Username or Password</p>
      )}
      <input className={form__button} type="submit" value="Log In" />
    </form>
  )
}
