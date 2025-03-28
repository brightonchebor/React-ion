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
  const [count, setCount] = useState();

  const increament = () => {
    count + 1;
  }
  const decreament = () => {
    count - 1;
  }

  return(
    <div>
      <p>{count}</p>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
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
