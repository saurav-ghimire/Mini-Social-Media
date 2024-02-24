// Components
import { useState } from 'react';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import PostListProvider from './store/post-list-store';
import { Outlet } from 'react-router-dom';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  
  return (
    <PostListProvider>
    <div className='app-container'>
      <div className="app-sidebar">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className='app-body'>
        <Header />      
        <div className="inner-body-wrapper">
        <Outlet />
        </div>
        <Footer />
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
