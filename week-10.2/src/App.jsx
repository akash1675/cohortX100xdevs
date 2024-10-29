// with context api
import {  createContext, useContext, useState } from "react"


const BulbContext = createContext();

// eslint-disable-next-line react/prop-types
function BulbProvider({children}){
  const [bulbOn, setBulbon] = useState(false);
  return (
    <BulbContext.Provider value={{bulbOn, setBulbon}}>
      {children}
    </BulbContext.Provider>
  )
}




function App() {

  return (
    <>
      <div>
        <BulbProvider>
          {/* LightBulb is children */}
          <LightBulb /> 
        </BulbProvider>  
      </div>
    </>
  )
}

function LightBulb() {

  return (
    <>
      <div>
        <BulbState  />
        <ToggleState />
      </div>
    </>
  )
}

 
function BulbState() {
  const {bulbOn} = useContext(BulbContext);
  return (
    <>
    <div>
      {bulbOn ? "Bulb-On":"Bulb-Off"}
    </div>

    </>
  )
}


function ToggleState() {
const {setBulbon} = useContext(BulbContext);

  function toggle(){
    setBulbon(c=>!c);
  }
  return (
    <>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
    </>
  )
}

export default App







 // ---------------this is without context Api-------------
// import { useState } from "react"

// function App() {

//   return (
//     <>
//       <div>
//         <LightBulb />
//       </div>
//     </>
//   )
// }

// function LightBulb() {

//   const [bulbOn, setBulbon] = useState(false);
  
//   return (
//     <>
//       <div>
//         <BulbState bulbOn={bulbOn} />
//         <ToggleState setBulbon={setBulbon} />
//       </div>
//     </>
//   )
// }

// // eslint-disable-next-line react/prop-types
// function BulbState({bulbOn}) {
//   return (
//     <>
//     <div>
//       {bulbOn ? "Bulb-On":"Bulb-Off"}
//     </div>

//     </>
//   )
// }

// // eslint-disable-next-line react/prop-types
// function ToggleState({setBulbon}) {

//   function toggle(){
//     setBulbon(c=>!c);
//   }
//   return (
//     <>
//       <div>
//         <button onClick={toggle}>toggle</button>
//       </div>
//     </>
//   )
// }

// export default App
