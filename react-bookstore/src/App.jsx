import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Header />
      {/* <p>
        We have several books. Feel free to browse for as long as you like.
        Click on a cover image to see details, or click the Add to Cart button
        to add a book to your shopping cart.
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer /> */}
    </>
  );
}

export default App;
