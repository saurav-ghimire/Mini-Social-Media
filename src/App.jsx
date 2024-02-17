// Components
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Header from './header';

function App() {
  return (
    <>
    <div className='app-container'>
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className='app-body'>
        <Header />      
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
