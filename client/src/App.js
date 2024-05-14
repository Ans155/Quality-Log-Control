import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.css';
import Home from './Home';
import AddLogForm from './components/AddLogs';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddLogForm/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
