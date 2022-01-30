import React, { useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
 
  const increaseM = () => {
  
    setCounter(counter + 1)
  }
  
  const decreaseM = () => {

    setCounter(counter - 1)
  }

  const resetM = () => {

    setCounter(0)
  }
  
  return (
    <div className="counter">
      Counter
      <div>
        {counter}
      </div>
      <div className="buttons">

        <button className="button1" onClick={increaseM}>Inc</button>

        <button className="button2" onClick={decreaseM}>Dec</button>

        <button className="button3" onClick={resetM}>Res</button>

      </div>

    </div>
  )
}
  
export default App;