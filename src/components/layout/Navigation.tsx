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
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <ListItemText 
            primary={item.label} 
            sx={{ 
              color: 'white',
              fontWeight: 600
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        zIndex: 1000
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Main Title - Centered */}
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            flex: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          בר מצווה לדניאל
        </Typography>

        {/* Background Music */}
        <BackgroundMusic musicUrl="./Yismach Hatani.mp3?v=20240825" volume={0.5} />

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                variant={location.pathname === item.path ? 'contained' : 'text'}
                sx={{
                  color: 'white',
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
                    background: `linear-gradient(135deg, ${theme.palette.custom.navigation.inactive} 0%, ${theme.palette.primary.main} 100%)`,
                    color: theme.palette.custom.navigation.text,
                    '&:hover': {
                      backgroundColor: theme.palette.custom.navigation.inactive,
                      background: `linear-gradient(135deg, ${theme.palette.custom.navigation.inactive} 0%, ${theme.palette.primary.main} 100%)`,
                    }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

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
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              color: 'white'
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
