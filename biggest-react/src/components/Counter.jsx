import React from 'react'
import { useState } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0);
    const myCount = () => setCount(
        prevCount => prevCount + 1
    );
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <button
          onClick={myCount}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    );
}

export default Counter
