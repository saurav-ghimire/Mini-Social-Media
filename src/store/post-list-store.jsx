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

const postReducer = (currentPostList) => {
  return currentPostList;

}

const PostListProvider = ({children}) => {
  const [PostLists, Dispatch] = useReducer(postReducer, default_post_list);
  return <postList.Provider value={{
    PostLists: PostLists,
    addPost: addPost,
    deletePost: deletePost
  }}>
    {children}
  </postList.Provider>
};



const addPost = () => {
  
};
const deletePost = (id) => {
  console.log('id', id)
};



export default PostListProvider;