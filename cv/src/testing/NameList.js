import React from 'react'
import Person from './Person';

function NameList() {
    const person = [{id: 3, name: 'bruce'}, {id: 2, name: 'kim'}]
    const personList = person.map(person => (<Person key={person.id} person = {person}></Person>))
  return (
    <div>
        {personList}
    </div>
  )
}

export default NameList