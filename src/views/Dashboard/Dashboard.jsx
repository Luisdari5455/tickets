import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  useTheme,
  useMediaQuery,
  Grid,
  Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../../components/SideBar/Sidebar';
import DashboardChart from './Components/Charts/DashboardChart';
import PieChart from './Components/Charts/PieChart';
import BarChart from './Components/Charts/BarChart';
import DashboardCards from './Components/CardsDashboard/CardDashboard';

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  // Esta consulta determina si estamos en modo responsivo o no.
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor:'  #F3F3F3' }}>
      <CssBaseline />
     
     

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <SideBar open={mobileOpen}
          toggleDrawer={handleDrawerToggle} />
        </Drawer>

        <Drawer
          variant="temporary"
      
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <SideBar        open={mobileOpen}
          toggleDrawer={handleDrawerToggle} />
        </Drawer>
   
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { md: `${drawerWidth}px` }, // Ajusta el margen izquierdo para que el contenido esté al lado del Sidebar
          marginTop: `64px`, // Ajusta el margen superior para que el contenido esté debajo del AppBar
        }}
      >
        <Toolbar />
        <DashboardCards />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2}><DashboardChart /></Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2}><PieChart /></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2}><BarChart /></Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
