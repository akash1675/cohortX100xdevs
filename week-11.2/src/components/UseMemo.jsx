//---------------wit Recoil------------------

import { useState, memo, useEffect } from 'react'


function UseMemo() {

  return (
    <>
      <Counter />
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 3000);
  }, [])

  return <>
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>

  </>
}

const CurrentCount = memo(function () {
  return (
    <div>
      {1}
    </div>
  )
})


const Increase = memo(function () {
  function increase() {

  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

const Decrease = memo(function () {
  function decrease() {

  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

export default UseMemo

