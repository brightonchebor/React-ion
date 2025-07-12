import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);

  return(
    <div className="card">
      <h2>My count:{count}</h2>
      <button onClick={increament} style={{color:'white'}}>+</button>
      <button onClick={decreament} style={{color:'white'}}>-</button>
    </div>
  )


}

export default Counter