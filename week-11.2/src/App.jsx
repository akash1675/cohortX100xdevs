


//---------------without Recoil------------------

// import { useState } from 'react'
// import './App.css'



// function App() {
  

//   return (
//     <>
//     <Counter/>
//     </>
//   )
// }

// function Counter(){
//   const [count, setCount] = useState(0);
//   return <>
//   {count}
//   <Increase setCount={setCount}/>
//   <Decrease setCount={setCount}/>
//   </>
// }


// function Increase({setCount}){
//   function increase(){
//     setCount(c=>c+1); 
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// function Decrease({setCount}){
//   function decrease(){
//     setCount(c=>c-1); 
//   }
//   return <div>
//     <button onClick={decrease} >decrease</button>
//   </div>
// }

// export default App



//---------------wit Recoil------------------


import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './store/atoms/counter';


function App() {
  

  return (
    <>
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
    </>
  )
}

function Counter(){
  return <>
  <CurrentCounter/>
  <Increase/>
  <Decrease/>
  </>
}

function CurrentCounter(){
 const count =  useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  function increase(){
    setCount(c=>c+1); 
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  function decrease(){
    setCount(c=>c-1); 
  }
  return <div>
    <button onClick={decrease} >decrease</button>
  </div>
}


export default App
