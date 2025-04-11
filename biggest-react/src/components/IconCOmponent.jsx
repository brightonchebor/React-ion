import React from 'react'
import { FaBeer } from 'react-icons/fa'


const IconCOmponent = () => {

    const style = {
        fontSize: '30px',
        color: 'gold',
        backgroundColor: 'black',
    }
  return (
    <div>
       <FaBeer style={style} />
    </div>
  )
}

export default IconCOmponent
