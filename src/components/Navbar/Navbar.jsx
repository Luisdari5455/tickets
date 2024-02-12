// src/components/Navbar.jsx
import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            <ListItem button component={RouterLink} to="/" onClick={handleDrawerToggle}>
                <ListItemText primary="SignIn" />
            </ListItem>
            <ListItem button component={RouterLink} to="/signup" onClick={handleDrawerToggle}>
                <ListItemText primary="SignUp" />
            </ListItem>
        </List>
    );

    return (
        <AppBar position="static">
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                {!isMobile && (
                    <>
                        <Typography variant="button" component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', marginRight: 2 }}>
                            Ingresar
                        </Typography>
                        <Typography variant="button" component={RouterLink} to="/signup" sx={{ color: 'inherit', textDecoration: 'none' }}>
                            Registrarse
                        </Typography>
                    </>
                )}
            </Toolbar>
            {isMobile && (
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            )}
        </AppBar>
    );
}
