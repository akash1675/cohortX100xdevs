//---------------wit Recoil------------------

import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from '../store/atoms/counter';


function UseRecoil() {
  

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


export default UseRecoil
