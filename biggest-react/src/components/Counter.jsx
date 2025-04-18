import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  
  const increament = setCount(
    prevCount => prevCount + 1
  )

  const decreament = setCount(
    prevCount => prevCount - 1
  )

  const buttonStyle = {
    padding: '10px',
    fontSize: '1rem',
    color: 'black'
  }

  return (
    <div>
      <p>My Count: {count}</p>
      <button onClick={increament}>
        Increament
      </button>
      <button onClick={decreament}>
        Decreament
      </button>
    </div>
  )
}

export default Counter
