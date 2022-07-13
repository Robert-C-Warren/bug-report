import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';


const drawerWidth = 300

export default function Layout({ children }) {

  return (


    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem component={Link} to='/' disablePadding>
              <ListItemButton >
                <ListItemIcon>
                    <Icon><BugReportOutlinedIcon /></Icon>
                </ListItemIcon>
                <ListItemText primary='Bugs' />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/bug' disablePadding>
              <ListItemButton >
                <ListItemIcon>
                    <Icon><AddCircleOutlinedIcon /></Icon>
                </ListItemIcon>
                <ListItemText primary='New Bug' />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>   
        <div >
            {children}
        </div>
    </Box>
  )
}
