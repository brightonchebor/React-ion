import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decreament = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
        </div>
    )
}

export default Counter
