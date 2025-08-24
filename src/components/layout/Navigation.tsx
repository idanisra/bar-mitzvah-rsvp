import { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const menuItems = [
    { path: '/', label: 'בית' },
    { path: '/rsvp', label: 'אישור השתתפות' }
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.path}
          onClick={() => handleNavigation(item.path)}
          selected={location.pathname === item.path}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'rgba(139, 69, 19, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(139, 69, 19, 0.2)',
        boxShadow: '0 2px 20px rgba(139, 69, 19, 0.3)'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'flex-end',
        direction: 'rtl'
      }}>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            direction: 'rtl'
          }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                variant={location.pathname === item.path ? 'contained' : 'text'}
                sx={{
                  color: 'white',
                  '&.MuiButton-contained': {
                    backgroundColor: 'rgba(218, 165, 32, 0.9)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(218, 165, 32, 1)',
                    }
                  },
                  '&.MuiButton-text': {
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
