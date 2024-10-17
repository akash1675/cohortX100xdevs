/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase(){
    setCount(cnt=>cnt+1);
  }

  function decrease(){
    setCount2(cnt => cnt-1);
  }

  return (
    <>
      <div>
        <Counter count={count} count2={count2} />
        <button onClick={increase}>Increase count</button>
        <button onClick={decrease}>decrease count</button>
      </div>
    </>
  )

}

// mouting ,re-rendering, unmounting
function Counter(props) {

  useEffect(function () {
    console.log("mount");

    return function () {
      console.log("unmount");
    }
  }, [])

  useEffect(function(){
    console.log("count has changed");
    return function(){
      console.log("cleanup inside second effect")
    }

  }, [props.count])


  return (
    <>
      <div>counter1 {props.count}</div>
      <div>counter2 {props.count2}</div>
    </>
  )

}

export default App





// creating counter button or mounting, unmounting, using useEffect
/*
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(counterVisible => !counterVisible)
    }, 5000);
  }, [])

  return (
    <>
    hi
    {counterVisible && <Counter></Counter>}
    hello
    </>
  )

}

// mouting ,re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0)


  useEffect(function(){
    console.log("on mount")
    let clock = setInterval(function(){
      console.log("from inside set-Interval");
      // setCount(count=>count+1);
      setCount(function(count){
        return count+1;
      })
    }, 1000)
     
    //clearInterval
    return function(){
      console.log("un mount")
      clearInterval(clock);
    }
    
  }, []); // dependency array, cleanup, fetch inside useEffect




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

*/