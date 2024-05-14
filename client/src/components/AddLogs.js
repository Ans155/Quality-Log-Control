import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import axios from 'axios';

const AddLogForm = () => {
  const [source, setSource] = useState('');
  const [level, setLevel] = useState('');
  const [logString, setLogString] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/api1/log', { metadata: {"source": source}, level, logString });

    } catch (error) {
      console.error('Error adding log:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Add Log
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="level-label">Level</InputLabel>
              <Select
                labelId="level-label"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <MenuItem value="error">Error</MenuItem>
                <MenuItem value="info">Info</MenuItem>
                <MenuItem value="success">Success</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Log String"
              value={logString}
              onChange={(e) => setLogString(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddLogForm;
