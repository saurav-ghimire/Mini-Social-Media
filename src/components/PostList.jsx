import { useContext } from "react";
import Post from "./Post";
import {postList as postListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";


function PostList() {
  
  const {PostLists, addInitialPosts} = useContext(postListData);

  const handleGetPostClick = () => {
  const postFromServer =  fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts)
    })
  }

  return <>
        {PostLists.length === 0 && <WelcomeMessage handleGetPostClick={handleGetPostClick} />}
        {PostLists.map((data) => <Post key={data.id} post={data} />)}
    </>
    ;
}

export default PostList;