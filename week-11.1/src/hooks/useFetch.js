/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// export function usePostTitle(){
//    const [post, setPost] = useState({});

//    async function  getPost() {
//       const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       const json = await resp.json();
//       setPost(json);
//    }

//    useEffect(() =>{
//       getPost();
//    }, [])

//    return post.title;
// }

export function useFetch(url){
   const [finalData, setFinalData] = useState({});
   const [loding, setLoding] = useState(true);
   
   async function getdetails() {
      setLoding(true);
      const response = await fetch(url);
      const jsonData = await response.json();
      setFinalData(jsonData);
      setLoding(false)
   }

   useEffect(()=>{
      getdetails();
   }, [url])

   return {finalData,loding}
}