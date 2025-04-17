import React from 'react'
import { useState } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0)
    const myCount = () => setCount(count++)
    return (
        <div>
        <p onClick={myCount}>Count: {count}</p>
        </div>
    )
}

export default Counter
