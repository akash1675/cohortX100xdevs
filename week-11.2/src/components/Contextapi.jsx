// ---------------without Recoil------------------

import { useState } from 'react'


function WithoutRecoil() {

  return (
    <>
    <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  return <>
  {count}
  <Increase setCount={setCount}/>
  <Decrease setCount={setCount}/>
  </>
}


function Increase({setCount}){
  function increase(){
    setCount(c=>c+1); 
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease({setCount}){
  function decrease(){
    setCount(c=>c-1); 
  }
  return <div>
    <button onClick={decrease} >decrease</button>
  </div>
}

export default WithoutRecoil

