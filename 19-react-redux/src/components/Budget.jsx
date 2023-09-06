import React from 'react'

export default function Budget() {


 

  return (
    <div>
        <h2>Redux Shelter Budget:</h2>
        <h3>$</h3>
        <div>
            <button className="ui button" onClick={() => console.log("click")}>Add $10</button>
            <button className="ui button" onClick={() => console.log("click")}>Subtract $5</button>
        </div>
    </div>
  )
}
