import React from 'react'

const Numbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      {numbers.map((number) => 
        <ul>
            <li>{number}</li>
        </ul>
    )}
    </div>
  )
}

export default Numbers
