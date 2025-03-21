import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  return( 
    <h2> {title} </h2>
  )
}

const App = () => {
  return(
    <div>
      <h2> Arrow Component</h2>
      < Card title='After We Collided' />
      < Card title='Five Feet Apart' />
    </div>

  )
}
export default App
