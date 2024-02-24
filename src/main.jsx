import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Components
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import PostList, { PostLoader } from './components/PostList.jsx';

const router = createBrowserRouter(
  [
    {path: '/', element: <App />, children: [
      { path: '/create-post', element: <CreatePost />,  action:createPostAction},
      { path: '/', element: <PostList />, loader:PostLoader},
    ]
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
