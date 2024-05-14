import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions } from '@mui/material';

const LogList = ({ logs }) => {
  const format= (timestamp)=>{
  
    const date = new Date(timestamp);


    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    console.log(formattedDate); 
    return formattedDate;

  }
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Log List
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {logs.map((log, index) => (
          
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: '100%', border: '4px solid linear-gradient(to right, #f6d365, #fda085)', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent sx={{ height: '200px', overflowY: 'auto', backgroundColor: '#fff' }}>
                <div>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Level: {log.level}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Message: {log.log_string}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Source: {log.metadata.source}
                  </Typography>
                </div>
              </CardContent>
              <CardActions sx={{ backgroundColor: '#fff' }}>
                <Typography variant="body2" color="textPrimary" align="right">
                  {format(log.timestamp)}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LogList;
