import { useEffect, useRef } from "react"

export function usePrev(value) {
   const ref = useRef();

   // it hold the value 
   useEffect(()=>{
      ref.current=value;
   },[value])
   
  return ref.current;
}

