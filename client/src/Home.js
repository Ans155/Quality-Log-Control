import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import LogList from './components/LogList';
import './styles.css';
import { Typography } from '@mui/material';
import AddLogForm from './components/AddLogs';
const Home = () => {
    const [logs, setLogs] = useState([]);

  const handleSearch = (data) => {
    setLogs(data);
  };
  return (
    <div>
        <Typography variant="h3" align="center" gutterBottom>
        Log Ingestor
      </Typography>
      <SearchForm onSearch={handleSearch} />
      <LogList logs={logs}/>
    </div>

  )
}

export default Home