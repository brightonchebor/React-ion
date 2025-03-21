import { useState, useSyncExternalStore } from "react"

const Card = ({title}) => {

  const [hasLiked, setHasLiked] = useState(initialState=false)

  return( 
    <div className='card'>
      <h2> {title} </h2>
      <button onClick={() => setHasLiked(true)}>
        Like
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
    </div>

  )
}
export default App
