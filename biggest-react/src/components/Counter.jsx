import React from 'react'
import { useState } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0);
    const myCount = () => setCount(
        prevCount => prevCount + 1
    );
    const buttonStyle = {
        padding: '10px',
        margin: '20px',
        fontSize: '2rem',
        color: 'black',
    }
    return (
      <div >
        <h1 >Counter: {count}</h1>
        <button
          onClick={myCount}
          style={buttonStyle}
          
        >
          Increment
        </button>
      </div>
    );
}

export default Counter
