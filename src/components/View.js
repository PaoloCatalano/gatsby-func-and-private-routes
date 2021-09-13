import React from "react"
import PropTypes from "prop-types"

const View = ({ title, children }) => (
  <section style={{ maxWidth: 640, margin: "2rem auto 3rem" }}>
    <h1>{title}</h1>
    {children}
  </section>
)

View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View
