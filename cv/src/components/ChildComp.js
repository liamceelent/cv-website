import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler('child')}>greet</button>
    </div>
  )
}

export default ChildComp