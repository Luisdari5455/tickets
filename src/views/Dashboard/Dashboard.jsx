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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, marginLeft: { md: `${drawerWidth}px` }, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
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
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
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
