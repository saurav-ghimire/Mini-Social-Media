import { createContext, useReducer, useState, useEffect } from "react";

const [default_post_list] = [];

export const postList = createContext({
  PostLists : [],
  addPost : () => {},
  deletePost:() => {},
  addInitialPosts:() => {},
  
});

const postReducer = (currentPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currentPostList.filter(post => post.id !== action.payload.postId);
    case 'ADD_INITIAL_POSTS':
      return action.payload.posts;
    case 'ADD_POST':
    const newcurrentPostList = [action.payload, ...currentPostList];
    console.log(newcurrentPostList)
    return newcurrentPostList;
    default:
      return currentPostList;
  }
};


const PostListProvider = ({children}) => {

  const[fetching, setFetching] = useState(false) 
  
  

  const [PostLists, dispatchPost] = useReducer(postReducer, []);

  const addPost = (post) => {
    console.log('i a at add post')
    console.log(post)
    dispatchPost({
      type: 'ADD_POST',
      payload: post
    })
  };
  const addInitialPosts = (posts) => {
    
    dispatchPost({
      type: 'ADD_INITIAL_POSTS',
      payload: {
        posts
      } 
    })
  };
  const deletePost = (id) => {
    dispatchPost({
      type: 'DELETE_POST',
      payload: {
        postId: id
      }
    })
  };


  return <postList.Provider value={{
    PostLists: PostLists,
    addPost: addPost,
    deletePost: deletePost,
    addInitialPosts: addInitialPosts,
    
  }}>
    {children}
  </postList.Provider>
};



export default PostListProvider;