import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';

const router = createBrowserRouter(
  [
    {path: '/', element: <App />, children: [
      { path: '/create-post', element: <CreatePost /> },
      { path: '/', element: <PostList /> },
    ]
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
