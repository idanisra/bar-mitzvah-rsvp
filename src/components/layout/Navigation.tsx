import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  Box, 
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import BackgroundMusic from '../common/BackgroundMusic';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { path: '/', label: 'בית' },
    { path: '/rsvp', label: 'אישור השתתפות' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.path}
          onClick={() => handleNavigation(item.path)}
          sx={{
            textAlign: 'center',
            '&:hover': {
              backgroundColor: 'rgba(30, 58, 138, 0.1)',
            }
          }}
        >
          <ListItemText 
            primary={item.label} 
            sx={{ 
              color: '#1e3a8a',
              fontWeight: 600
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        zIndex: 1000,
        top: 0
      }}
    >
      <Toolbar sx={{ position: 'relative', minHeight: '64px' }}>
        {/* Main Title - Absolutely Centered Across Entire Width */}
        <Typography
          variant="h5"
          sx={{
            color: '#DAA520', // Gold color
            fontWeight: 700,
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1
          }}
        >
          בר מצווה לדניאל
        </Typography>

        {/* Left Side: Mobile Menu Button */}
        {isMobile && (
          <Box sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setMobileOpen(true)}
              sx={{ color: '#1e3a8a' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        {/* Right Side: Navigation Buttons + Music */}
        <Box sx={{ 
          position: 'absolute', 
          right: 16, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          zIndex: 2
        }}>
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  variant={location.pathname === item.path ? 'contained' : 'text'}
                  sx={{
                    color: '#1e3a8a',
                    '&.MuiButton-contained': {
                      backgroundColor: theme.palette.custom.navigation.active,
                      background: `linear-gradient(135deg, ${theme.palette.custom.navigation.active} 0%, ${theme.palette.primary.light} 100%)`,
                      color: theme.palette.custom.navigation.text,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                      }
                    },
                    '&.MuiButton-text': {
                      background: 'transparent',
                      color: '#1e3a8a',
                      border: '2px solid #1e3a8a',
                      '&:hover': {
                        backgroundColor: 'rgba(30, 58, 138, 0.1)',
                        borderColor: '#1e40af',
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Background Music - Rightmost */}
          <BackgroundMusic musicUrl="./Yismach Hatani.mp3?v=20240825" volume={0.5} />
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              color: '#1e3a8a',
              borderLeft: '1px solid rgba(255, 255, 255, 0.3)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
