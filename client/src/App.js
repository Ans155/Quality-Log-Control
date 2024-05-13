import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import LogList from './components/LogList';

function App() {
  const [logs, setLogs] = useState([]);

  const handleSearch = (data) => {
    setLogs(data);
  };

  return (
    <div>
      <h1>Log Search Interface</h1>
      <SearchForm onSearch={handleSearch} />
      <LogList logs={logs} />
    </div>
  );
}

export default App;
