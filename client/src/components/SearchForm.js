import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if end date is greater than or equal to start date
    if (endDate && new Date(endDate) < new Date(startDate)) {
      setError('End date must be greater than or equal to start date');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3002/api1/search', { query, startDate, endDate });
      onSearch(response.data);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error searching logs:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
            <TextField
              fullWidth
              type="text"
              label="Search logs..."
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="date"
              label="Start Date"
              variant="outlined"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="date"
              label="End Date"
              variant="outlined"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              error={error !== ''}
              helperText={error}
            />
          </Grid>
          <Grid item xs={1}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SearchForm;
