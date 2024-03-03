import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import CustomTable from '../../components/Tables/Table';
import TicketCreationModal from './Components/ModalTickets';

const drawerWidth = 240;

const MainComponent = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data); // Aquí puedes manejar la lógica para enviar los datos del formulario
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const titles = ['DPI', 'Nombre']; // Definir los títulos de las columnas
  const data = [ // Definir los datos de la tabla
    { dpi: '123456789', nombre: 'Ejemplo 1' },
    { dpi: '987654321', nombre: 'Ejemplo 2' },
    // Añadir más datos según sea necesario
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { md: `${drawerWidth}px` }, // Ajusta el margen izquierdo para que el contenido esté al lado del Sidebar
          marginTop: `150px`, // Ajusta el margen superior para que el contenido esté debajo del AppBar
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end', // Alinea el botón a la derecha
        }}
      >
   
        <Box mb={2}> {/* Agrega un margen inferior al botón para separarlo de la tabla */}
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Crear 
          </Button>
        </Box>
        <TicketCreationModal open={open} handleClose={handleClose} onSubmit={handleSubmit} />
        <CustomTable
          titles={titles}
          data={data}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default MainComponent;
