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
        {/* <div>{postTitle}</div> */}
        {JSON.stringify(finalData)}
      </div>
    </>

  )
}

export default App