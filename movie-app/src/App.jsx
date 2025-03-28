import React, { useState, useEffect } from "react"

const Card = ({title}) => {

  // useStateb sytanx (it's a hook)
  const [hasLiked, setHasLiked] = useState(false) 

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);
  
  return( 
    <div className='card' onClick={() => setCount(count + 1)}>

      <h2> {title} <br /> {count} </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍' }
      </button>

    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);

  return(
    <div className="card">
      <h2>My count:{count}</h2>
      <button onClick={increament} style={color:'white'}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  )


}



const App = () => {

  
  return(
    <div className='card-container'>

      < Card title='After We Collided' />
      < Card title='Love, Simon' />
      < Card title='Five Feet Apart' />
      < Card title='Squid Game' />

      <Counter />
      
    </div>

  )
}
export default App
