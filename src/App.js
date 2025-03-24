import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import { Main } from "./components/screens/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/screens/Single-page";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
