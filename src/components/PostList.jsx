import { useContext } from "react";
import Post from "./Post";
import {postList as postListData} from "../store/post-list-store";

function PostList() {
  const {PostLists} = useContext(postListData);
  return (PostLists.map((data) => <Post key={data.id} post={data} />));
}

export default PostList;