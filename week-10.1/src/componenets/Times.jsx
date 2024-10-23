import { useRef, useState } from "react"

function Times() {
const [time, setTime] = useState(0);

const timeRef = useRef(null);

const startTime =() =>{
   if(timeRef.current !== null)return;
   timeRef.current = setInterval(()=> {
      setTime(c=> c+1);
   }, 1000)
   console.log(time);
};

const stopTime = () =>{
   clearInterval(timeRef.current);
   timeRef.current = null;
   console.log(time);
}




  return (
    <div>
      <h1>Timer : {time}</h1>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
    </div>
  )
}

export default Times