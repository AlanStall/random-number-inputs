import React, { useState } from 'react'
import './app.css'

export function App() {
  const [numberMinor, setnumberMinor] = useState("")
  const [numberBigger, setnumberBigger] = useState("")
  const [numberResult, setnumberResult] = useState("")  

  function createRandomNumber(){    
    var minor = Number(numberMinor);
    var bigger = Number(numberBigger);
    setnumberResult(Math.floor(Math.random()*(bigger - minor + 1)) + minor)    
  };
  
  return (
    <>
      <h3 id="title">Random number between a range of two numbers</h3>
      <br></br>      
      <input         
        className="minor-number"        
        onChange={(e) => setnumberMinor(e.target.value)}
      >        
      </input>
      <input         
        className="bigger-number"        
        onChange={(f) => setnumberBigger(f.target.value)}        
      >        
      </input>
      <div>
        <button className="calculate" onClick={createRandomNumber}>Random Number</button>
        <h4 id="result">{numberResult}</h4>
      </div>      
    </>
  )
}

