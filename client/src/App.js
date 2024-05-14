import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllLogsPage from './components/All';
import './styles.css';
import Home from './Home';
import AddLogForm from './components/AddLogs';
function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddLogForm/>}/>
        <Route path="/all-logs" element={<AllLogsPage />} /> 
      </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
