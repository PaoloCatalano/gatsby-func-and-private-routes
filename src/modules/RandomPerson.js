import React, { useEffect, useState } from "react"

export default function RandomPerson({ quantity = 1 }) {
  const [persons, setPersons] = useState({ results: [] })

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${quantity}`)
      .then(x => x.json())
      .then(x => setPersons(x))
  }, [quantity])

  const results = persons?.results

  console.log(results)

  return (
    <div>
      {results.map((person, index) => (
        <>
          <h1 key={index}> {person.name.first}</h1>
          <pre>{JSON.stringify(persons, null, 2)}</pre>
          <hr />
        </>
      ))}
    </div>
  )
}
