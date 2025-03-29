import Card from "./components/Card"
import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import "./App.css";


const App = () => {

  
  return(
    // <div className='card-container'>

    //   < Card title='After We Collided' />
    //   < Card title='Love, Simon' />
    //   < Card title='Five Feet Apart' />
    //   < Card title='Squid Game' />

    //   <Counter />
      
    // </div>

    <>
      <Navbar />
      <div className="h-screen relative bg-[url('/src/assets/mountain.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-slate-900 before:opacity-50">
        <div className="z-50"></div>
      
      </div>
    </>
  )
}
export default App
