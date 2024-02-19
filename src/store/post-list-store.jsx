import { createContext, useReducer } from "react";

const default_post_list = [];

export const postList = createContext({
  PostLists : [],
  addPost : () => {},
  deletePost:() => {},
  addInitialPosts:() => {}
});

const postReducer = (currentPostList,action) => {
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = newPostList.filter(post => post.id !== action.payload.postId)
  }else if(action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currentPostList ]
  }else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts
  }
  return newPostList;

}

const PostListProvider = ({children}) => {
  const [PostLists, dispatchPost] = useReducer(postReducer, default_post_list);

  const addPost = (userID, title, body, reaction, finalTags) => {
    
    dispatchPost({
      type: 'ADD_POST',
      payload: {
        id:userID,
        title: title,
        body: body,
        reactions: reaction,
        tags: finalTags
      } 
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
    addInitialPosts: addInitialPosts
  }}>
    {children}
  </postList.Provider>
};



export default PostListProvider;