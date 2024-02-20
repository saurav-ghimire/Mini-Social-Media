import { useContext, useEffect, useState} from "react";
import Post from "./Post";
import {postList as postListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const {PostLists, fetching} = useContext(postListData);
  return <>
        {fetching && <LoadingSpinner/>}
        {!fetching && PostLists.length === 0 && <WelcomeMessage />}
        {!fetching && PostLists.map((data) => <Post key={data.title} post={data} />)}
    </>
    ;
}

export default PostList;