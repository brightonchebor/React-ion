import React from 'react'
import { useState } from 'react'


const EventDemo = () => {

    const [button, setButton] = useState('Click Me!')
    const handleButton = () => {
        setButton('Button Clicked')
    }
    return (
        <div>

            <div>
            <button onClick={handleButton}></button>
            <p></p>
            </div>

        </div>
    )
}

export default EventDemo
