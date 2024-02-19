import { useContext, useEffect} from "react";
import Post from "./Post";
import {postList as postListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";


function PostList() {
  
  const {PostLists, addInitialPosts} = useContext(postListData);
  
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts)
    })
  }, [])

  return <>
        {PostLists.length === 0 && <WelcomeMessage />}
        {PostLists.map((data) => <Post key={data.id} post={data} />)}
    </>
    ;
}

export default PostList;