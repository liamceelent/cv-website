import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>i am {person.name}, id is {person.id}</h2>
    </div>
  )
}

export default Person