import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Show menu icon only for small devices

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          {/* Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* App Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: isMobile ? '10px' : '0' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              श्री क्षत्रीय घाँची युवा महासभा समिति
            </Link>
          </Typography>

          {/* Links for Desktop */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
              <Link to="/teams" style={{ textDecoration: 'none', color: 'white' }}>
                Teams
              </Link>
              <Link to="/cricket" style={{ textDecoration: 'none', color: 'white' }}>
                Players
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                Contact
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/teams">
            <ListItemText primary="Teams" />
          </ListItem>
          <ListItem button component={Link} to="/cricket">
            <ListItemText primary="Players" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;