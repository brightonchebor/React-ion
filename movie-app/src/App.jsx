import { useState } from "react"

const Card = ({title}) => {

  // useStateb sytanx (it's a hook)
  const [hasLiked, setHasLiked] = useState(false) 

  return( 
    <div className='card'>

      <h2> {title} </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍' }
      </button>

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
      
    </div>

  )
}
export default App
