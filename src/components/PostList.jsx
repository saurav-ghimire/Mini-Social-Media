import { useContext, useEffect, useState} from "react";
import Post from "./Post";
import {postList as postListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const PostLists = useLoaderData();
  return <>
        
        {PostLists.length === 0 && <WelcomeMessage />}
        {PostLists.map((data) => <Post key={data.title} post={data} />)}
    </>
    ;
}

export const PostLoader = () =>{ 
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      return data.posts;
    })
  }
export default PostList;