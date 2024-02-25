import { createContext, useEffect, useReducer } from "react";

export const postList = createContext({
  PostLists : [],
  addPost : () => {},
  deletePost:() => {},
  addInitialPosts:() => {},
  
});

const reducer = (currentPost, action) => {
  if(action.type === 'ADD_INITIAL_POSTS'){
    currentPost = action.payload;
  }else if(action.type === 'ADD_POST'){
    currentPost = [action.payload, ...currentPost];
  }
  else if(action.type === 'DELETE_POST'){
    currentPost = currentPost.filter((post) => post.id !== action.payload.id)
  }
  return currentPost;
}

const PostListProvider = ({children}) => {
  
  const [state, Dispatch] = useReducer(reducer, []);
  
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      allInitialPost(data.posts)
    })
  }, [])

  const allInitialPost = (data) => {
    // console.log(data)
  Dispatch({
          type: 'ADD_INITIAL_POSTS',
          payload: data
        })
  }

  const addPost = (data) => {
    Dispatch({
      type : 'ADD_POST',
      payload : data
    })
  }
  const deletePost = (data) => {
    Dispatch({
      type : 'DELETE_POST',
      payload : {
        id : data
      }
    })
  }
  
  return <postList.Provider value={{
    PostLists : state,
    addPost: addPost,
    deletePost: deletePost,
  }}>
    {children}
  </postList.Provider>
};



export default PostListProvider;