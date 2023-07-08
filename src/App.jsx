import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
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
          <Route path="/about" element={<About/>}/>
        </Routes>
       
      </Router>
      
    </>
  )
}

export default App
