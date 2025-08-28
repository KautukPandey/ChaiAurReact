import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  

  const addValue = () =>{
    console.log("Added1", Math.random());
    setCount(counter+1)
  }
  const removeValue = () =>{
    console.log("Added1", Math.random());
    setCount(counter-1)
  }


  return (
    <>
      <h1>React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Delete value</button>
    </>
  )
}

export default App
