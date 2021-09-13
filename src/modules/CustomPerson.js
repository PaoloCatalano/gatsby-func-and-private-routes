import React, { useEffect, useState } from "react"

export default function CustomPerson() {
  const [persons, setPersons] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    fetch("../api/expressTest")
      .then(x => x.json())
      .then(x => setPersons(x))
      .then(() => setloading(false))
  }, [])

  const { data } = persons

  console.log(data)

  return (
    <div>
      {loading && <h1>LOADING...</h1>}
      {data?.map(person => (
        <div key={person.id}>
          <h1> {person.name}</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <hr />
        </div>
      ))}
    </div>
  )
}
