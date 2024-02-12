// src/components/Sidebar.jsx
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import menuItems from './Functions/menuItems';
import SidebarItem from './components/sidebarItem';

const Sidebar = ({ open, toggleDrawer }) => {
  return (
  
      <div
        role="Dashboard"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <SidebarItem {...item} key={index} />
          ))}
        </List>
      </div>
  
  );
};

export default Sidebar;
