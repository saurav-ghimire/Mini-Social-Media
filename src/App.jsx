// Components
import { useState } from 'react';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Header from './components/header';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
    <div className='app-container'>
      <div className="app-sidebar">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className='app-body'>
        <Header />      
        <div className="inner-body-wrapper">
          {selectedTab === 'Home' ? <PostList /> : <CreatePost /> }
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
