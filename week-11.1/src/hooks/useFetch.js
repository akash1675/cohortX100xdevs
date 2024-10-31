import { useEffect, useState } from "react";

export function usePostTitle(){
   const [post, setPost] = useState({});

   async function  getPost() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await resp.json();
      setPost(json);
   }

   useEffect(() =>{
      getPost();
   }, [])

   return post.title;
}