import { createContext, useReducer } from "react";

const default_post_list = [{
  id:'1',
  title: 'Learn React',
  body: 'Welcome to learning the JS',
  reactions: 0,
  userId: 'user-1',
  tags: ['learning', 'js', 'react']
},
{
  id:'2',
  title: 'Traveling',
  body: 'Welcome to Nepal',
  reactions: 2,
  userId: 'user-2',
  tags: ['nepal', 'asia']
}];

export const postList = createContext({
  PostLists : [],
  addPost : () => {},
  deletePost:() => {}
});

const postReducer = (currentPostList,action) => {
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = newPostList.filter(post => post.id !== action.payload.postId)
  }else if(action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currentPostList ]
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
    deletePost: deletePost
  }}>
    {children}
  </postList.Provider>
};



export default PostListProvider;