import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Snackbar } from '@mui/material';
import axios from 'axios';

const AddLogForm = () => {
  const [source, setSource] = useState('');
  const [level, setLevel] = useState('');
  const [logString, setLogString] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://quality-log-control-rr69.onrender.com/api1/log', { metadata: { "source": source }, level, logString });
      setOpenSnackbar(true); 

      setSource('');
      setLevel('');
      setLogString('');
    } catch (error) {
      console.error('Error adding log:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Log submitted successfully!"
      />
    </Container>
  );
};

export default AddLogForm;
