import { useContext, useEffect, useState} from "react";
import Post from "./Post";
import {postList as postListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const[fetching, setFetching] = useState(false)
  
  const {PostLists, addInitialPosts} = useContext(postListData);
  
  useEffect(() => {
    setFetching(true)
    const controller = new AbortController();
    const single = controller.single;
    fetch('https://dummyjson.com/posts', {single})
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts)
      setFetching(false)
    })
    return () => {
      console.log("Cleaning up the useEffect");
      controller.abort();
    }    
  }, [])

  return <>
        {fetching && <LoadingSpinner/>}
        {!fetching && PostLists.length === 0 && <WelcomeMessage />}
        {!fetching && PostLists.map((data) => <Post key={data.id} post={data} />)}
    </>
    ;
}

export default PostList;