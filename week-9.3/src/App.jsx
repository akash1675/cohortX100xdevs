/* eslint-disable react/jsx-key */
import { useState } from "react"
import { PostComponent } from "./componenets/Post";

function App() {
  const [post, setPosts] = useState([]);

  const postComponent = post.map(post=> <PostComponent
  name={post.name}
  subtitle={post.subtitle}
  image={post.image}
  description={post.description}
  />)


function addPost() {
  setPosts([...post, {
    name: "harkirat",
    subtitle: "10000 followers",
    time: "2m ago",
    image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
    description: "What to know how to win big? Check out how these folks won $6000 in bounties."
  }])
}

  return (
    <>
    <div style ={{background:"#dfe6e9", height:"100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
    </>
  )
}

export default App












//---------------------------xxx------------------------------
// import { useState } from "react";

// function App() {
//   return (
//     <div style={{background: "#dfe6e9", height: "100vh" }}>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//   )
// }

// // the component isnt re-rendering
// // because we havent used a state variable

// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//   console.log("re-render");
//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//       <div>
//           <button onClick={increment}>
//               Increase count
//           </button>
//           {notificationCount}
//       </div>
//   );
// };

// export default App;