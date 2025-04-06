import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Header />
      
      <Footer />
    </>
  );
}

export default App;
