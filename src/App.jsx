import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import JobListing from "./pages/JobListing";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job" element={<JobListing />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
