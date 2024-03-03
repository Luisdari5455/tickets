// src/components/DashboardCards.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CancelIcon from '@mui/icons-material/Cancel';
import '../../Dashboard.css'; // Importa la hoja de estilos CSS
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const cardData = [
  {
    title: 'Tickets Creados',
    value: '150',
    Icon: AssignmentTurnedInIcon,
    colorClass: 'createdCard',
  },
  {
    title: 'Tickets en proceso',
    value: '35',
    Icon: CancelIcon,
    colorClass: 'rejectedCard',
  },
  {
    title: 'Tickets completados',
    value: '35',
    Icon: CheckCircleIcon,

  },
  // Puedes agregar más datos aquí
];

const DashboardCards = () => {
  return (
    
     <Grid container spacing={2}> {/* Utiliza un margen horizontal de 2 entre las tarjetas */}
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}> {/* Define el tamaño de las columnas para diferentes tamaños de pantalla */}
          <Card className={`dashboardCard ${card.colorClass}`}>
            <CardContent className="dashboardCardContent">
              <card.Icon className="dashboardIcon" />
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="h6">{card.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  
  );
};

export default DashboardCards;
