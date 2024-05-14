import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import LogList from './components/LogList';
import './styles.css';
import { Typography } from '@mui/material';
function App() {
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
      <LogList logs={logs} />
    </div>
  );
}

export default App;
