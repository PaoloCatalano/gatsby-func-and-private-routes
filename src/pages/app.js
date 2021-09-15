import React from "react"
import RandomPerson from "../modules/RandomPerson"
import CustomPerson from "../modules/CustomPerson"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Err from "../components/Home"
import Details from "../components/Details"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import SingleIssue from "../components/SingleIssue"
import "../css/global.css"

export default function app() {
  return (
    <Layout>
      <Router>
        <CustomPerson path="/app/custom-person" />
        <RandomPerson path="/app/random-person/:quantity" />
        <SingleIssue path="/app/issues/:id" />
        <PrivateRoute path="/app/details" component={Details} />
        <Login path="/app/login" />
        <Err path="*" />
      </Router>
    </Layout>
  )
}
