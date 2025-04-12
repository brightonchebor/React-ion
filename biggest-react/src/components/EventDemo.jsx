import React from 'react'
import { useState } from 'react'
import { GiButtonFinger } from 'react-icons/gi'


const EventDemo = () => {

    const [button, setButton] = useState('Click Me!')
    const handleButton = () => {
        setButton('Button Clicked')
    }

    const [copy, setCopy] = useState('Copy Me!')
    const handleCopy = () => {
        setCopy('Text Copied')
    }

    const [hover, setHover] = useState('Hover over me!')
    const handleHover = () => {
        setHover({backgroundColor: 'lightyellow'})
    }
    const handleHoverOut = () => {
        setHover({})
    }

    
    return (
        <div>

            <div>
            <button onClick={handleButton}>{button}</button>
            <p></p>
            </div>

            <div>
                <p onCopy={handleCopy}>{copy}</p>
            </div>

        </div>
    )
}

export default EventDemo
