import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Infantil from "./pages/Infantil";
import Peliculas from "./pages/Peliculas";


import Series from "./pages/Series";
import Signup from "./pages/Signup";
import Tv from "./pages/Tv";

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />  
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/infantil" element={<Infantil />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
