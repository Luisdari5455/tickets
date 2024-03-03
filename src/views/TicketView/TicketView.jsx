import React from 'react';
import {
  AppBar, Toolbar, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Grid, Box
} from '@mui/material';

const QueueDisplay = () => {
  // The current turn and user
  const currentTurn = {
    turn: 'AS1',
    user: 'Juan Esteban',
    phone: '244466666',
    module: 'M1'
  };

  // The rest of the queue
  const queueData = [
    // ... other queue items
    { turn: 'AS2', user: 'Maria Lopez', phone: '255577777', module: 'M1' },
    // Add more queued turns here
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{ marginBottom: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Turnos de Espera
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', marginBottom: 2 }}>
            <Typography variant="h5">RINGOW</Typography>
            {/* Display current turn and user */}
            <Typography variant="h4" color="secondary">{currentTurn.turn}</Typography>
            <Typography variant="subtitle1">{currentTurn.user}</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper} elevation={3}>
            <Table aria-label="queue table">
              <TableHead>
                <TableRow>
                  <TableCell>Turno</TableCell>
                  <TableCell align="right">Usuario</TableCell>
                  <TableCell align="right">Teléfono</TableCell>
                  <TableCell align="right">Módulo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {queueData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{row.turn}</TableCell>
                    <TableCell align="right">{row.user}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.module}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QueueDisplay;
