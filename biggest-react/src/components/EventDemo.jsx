import React from 'react'
import { useState } from 'react'


const EventDemo = () => {

    const [button, setButton] = useState('Button Clicked')

    return (
        <div>

            <div>
            <button></button>
            <p></p>
            </div>
            
        </div>
    )
}

export default EventDemo
