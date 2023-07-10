import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfilePage from './pages/UserProfile';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
     
      <Router>
      <Navbar />
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/userprofile" element={<UserProfilePage/>}/>
        </Routes>
       
      </Router>
      
    </>
  )
}

export default App
