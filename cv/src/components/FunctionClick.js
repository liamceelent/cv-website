import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("click")
    }
  return (
    <div>
        <button onClick={clickHandler}>hi</button> 
    </div>
  )
}

export default FunctionClick