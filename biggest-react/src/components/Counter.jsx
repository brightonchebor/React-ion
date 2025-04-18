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
    color: 'black',
  }

  return (
    <div>
      <p>My Count: {count}</p>
      <button onClick={increament} style={buttonStyle}>
        Increament
      </button >
      <button onClick={decreament} style={buttonStyle}>
        Decreament
      </button>
    </div>
  )
}

export default Counter
