import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import LogList from './LogList';

const AllLogsPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {

    const fetchLogs = async () => {
      try {
        const response = await axios.get('https://quality-log-control-rr69.onrender.com/api1/alllogs');
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        All Logs
      </Typography>
      <LogList logs={logs} />
    </Container>
  );
};

export default AllLogsPage;
