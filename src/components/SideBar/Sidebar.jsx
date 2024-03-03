import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import menuItems from './Functions/menuItems';
import SidebarItem from './components/sidebarItem';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Sidebar = ({ open, toggleDrawer }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open={open}
      >
        LOGO
        <div role="Dashboard">
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <SidebarItem {...item} key={index} />
            ))}
          </List>
        </div>
      </Drawer>
      <Drawer
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            marginTop: '55px', // Margen superior para evitar que se superponga al Navbar en dispositivos móviles
          },
        }}
        open={open}
        onClose={toggleDrawer} // Cierra el Drawer cuando se hace clic fuera de él
      >
        <div role="Dashboard">
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <SidebarItem {...item} key={index} />
            ))}
          </List>
        </div>
      </Drawer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{ display: { md: 'none' } }} // Se muestra solo en dispositivos móviles
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
