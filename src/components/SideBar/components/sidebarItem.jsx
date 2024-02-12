// src/components/SidebarItem.jsx
import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Collapse, List } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const SidebarItem = ({ text, icon: Icon, path, subItems = [] }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (subItems.length) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItem button component={RouterLink} to={path} onClick={handleClick}>
        {Icon && <ListItemIcon><Icon /></ListItemIcon>}
        <ListItemText primary={text} />
        {subItems.length > 0 && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {subItems.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems.map((subItem, index) => (
              <SidebarItem {...subItem} key={index} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
