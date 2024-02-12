// src/menuItems.js
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AssignmentIcon from '@mui/icons-material/Assignment';

const menuItems = [
  {
    text: 'Dashboard',
    icon: DashboardIcon,
    path: '/dashboard',
  },
  {
    text: 'Roles',
    icon: GroupIcon,
    path: '/roles',
  },
  {
    text: 'Crear Ticket',
    icon: AddBoxIcon,
    // path: '/crear-ticket',
    subItems: [
      {
        text: 'Sub-opción 1',
        path: '/crear-ticket/sub-opcion-1',
        icon: AddBoxIcon,
      },
      // Más subopciones aquí si es necesario
    ],
  },
  {
    text: 'Administración de Tickets',
    icon: AssignmentIcon,
    // path: '/admin-tickets',
    subItems: [
      {
        text: 'Sub-opción A',
        // path: '/admin-tickets/sub-opcion-a',
        icon: AddBoxIcon,
      },
      // Más subopciones aquí si es necesario
    ],
  },
  // Más opciones aquí si es necesario
];

export default menuItems;
