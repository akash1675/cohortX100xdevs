import { useState, useEffect } from 'react'
import './App.css'

function App() {

  return (
    <>
    <Counter></Counter>
    </>
  )

}

// mouting ,re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0)


  useEffect(function(){
    setInterval(function(){
      // setCount(count=>count+1);
      setCount(function(count){
        return count+1;
      })
    }, 60000)
    console.log("mounted");
  }, []);


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
        <h1 id='text'>{count}</h1>
        <button onClick={increseCount}>Increase count</button>
        <button onClick={decreseCount}>decrease count</button>
        <button onClick={resetCount}>reset count</button>
      </div>
    </>
  )
}

export default App
