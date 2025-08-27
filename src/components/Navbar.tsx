import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';
import { getImagePath } from '../utils/helpers';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const navItems = [
    { text: 'Начало', path: '/', icon: <HomeIcon /> },
    { text: 'За нас', path: '/about', icon: <InfoIcon /> },
    { text: 'Услуги', path: '/services', icon: <ConstructionIcon /> },
    { text: 'Галерия', path: '/gallery', icon: <PhotoLibraryIcon /> },
    { text: 'Контакти', path: '/contact', icon: <ContactsIcon /> }
  ];

  const isActive = (path: string) => {
    // Check if the current path exactly matches the nav item path
    if (path === '/' && location.pathname === '/') return true;
    
    // For non-home paths, check if the current path starts with the nav item path
    // This handles sub-routes (e.g., /services/1 should highlight the Services nav item)
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    
    return false;
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Handle navigation with smooth scroll to top
  const handleNavigation = (path: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    
    // If we're already on the same page, just scroll to top smoothly
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Otherwise navigate to the new page and then scroll to top
      navigate(path);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppBar position="sticky" elevation={2} sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo/Brand */}
          <Box
            component={Link}
            to="/"
            onClick={handleNavigation('/')}
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <img 
              src={"https://picsum.photos/800/600?random=209"} 
              alt="GSK Logo" 
              style={{ 
                height: 70, 
                width: 'auto',
                borderRadius: '1px'
              }} 
            />
            {/* <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'white',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              - Гипсокартон Бургас
            </Typography> */}
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  onClick={handleNavigation(item.path)} // Add smooth scroll handler
                  startIcon={item.icon}
                  sx={{
                    mx: 1,
                    color: 'white',
                    fontWeight: isActive(item.path) ? 700 : 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      bgcolor: 'white',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      '&::after': {
                        width: '100%'
                      }
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button 
                component={Link} 
                to="/login"
                onClick={handleNavigation('/login')}
                variant="outlined" 
                startIcon={<LoginIcon />}
                sx={{ 
                  ml: 2, 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white'
                  }
                }}
              >
                Вход
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem 
                    key={item.text} 
                    component={Link} 
                    to={item.path}
                    onClick={handleNavigation(item.path)}
                    sx={{
                      bgcolor: isActive(item.path) ? 'primary.light' : 'transparent',
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                    }}
                  >
                    <ListItemIcon sx={{ 
                      color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                      minWidth: '40px'
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
                <ListItem 
                  component={Link} 
                  to="/login"
                  onClick={handleNavigation('/login')}
                  sx={{ mt: 2 }}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    <LoginIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Вход" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;