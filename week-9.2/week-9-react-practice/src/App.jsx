import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <Counter></Counter>
    </>
  )

}


function Counter() {
  const [count, setCount] = useState(1)

  function increseCount(){
    setCount(count+1);
  }

  function decreseCount(){
    setCount(count-1);
  }

  function resetCount(){
    setCount(0);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increseCount}>Increase count</button>
        <button onClick={decreseCount}>decrease count</button>
        <button onClick={resetCount}>reset count</button>
      </div>
    </>
  )
}

export default App
