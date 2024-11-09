
/********************************* 
----------> USEFETCH USE CASE

import { useFetch } from "./hooks/useFetch"
// import { usePostTitle } from "./hooks/useFetch"
import { useState } from "react";


function App() {
  const [currentPost, setCurrentPost] = useState(1);

  const { finalData, loding } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  // const postTitle = usePostTitle();

  if (loding) {
    return <div>
      Loding.....
    </div>
  }

  return (
    <>

      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      <div>
        {JSON.stringify(finalData)}
      </div>
    </>

  )
}

export default App

*****************************************/




/***************************************** 
------------------->USEPREV USE CASE

import {useState} from "react"

import { usePrev } from "./hooks/usePrev"

const App = () => {
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  

  return (
    <>
    <p>{state}</p>

    <button onClick={()=> {
      setState((curr) => curr+1)
    }}>
      Click Me!
    </button>
    <p>This is Previous value {prev}</p>
    </>
  )
}

export default App


***************************************************/