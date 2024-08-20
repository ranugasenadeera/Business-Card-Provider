import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import NavBar from './components/Navbar';
import Home from './components/Home';
import CardCreation from './components/CardCreation';

function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-card" element={<CardCreation />} />
      </Routes>
    </Router>

  );
}

export default App;
