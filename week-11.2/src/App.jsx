import React from 'react'
// import WithoutRecoil from './components/Contextapi'
import UseRecoil from './components/UseRecoil'
import './App.css'
import UseMemo from './components/UseMemo'
import UseSelctors from './components/UseSelctors'

const App = () => {


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <WithoutRecoil/> */}
      {/* <UseRecoil /> */}
      {/* <UseMemo/> */}
      <UseSelctors/>
    </div>
  )
}

export default App