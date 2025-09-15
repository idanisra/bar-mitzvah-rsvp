import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, VolumeUp, VolumeOff, Star, Celebration } from '@mui/icons-material';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted by default
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Initialize audio on component mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Ishay Ribo.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.preload = 'auto';
      audioRef.current.muted = false;
      
      // Try to play immediately
      audioRef.current.play().catch(error => {
        console.log('Auto-play failed:', error);
      });
    }
  }, []);

  // Handle mute/unmute functionality
  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        // Play music when unmuted
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
          // Some browsers require user interaction before playing audio
        });
      }
    }
  }, [isMuted]);

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMuteToggle = () => {
    setIsMuted(prev => !prev);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderTopLeftRadius: '24px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: 'rgba(255, 255, 255, 0.8)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            width: 40,
            height: 40,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              transform: 'scale(1.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}
          aria-label="סגור תפריט"
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Typography
          variant="h5"
          sx={{
            color: '#FFD700',
            fontWeight: 700,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            mb: 1,
            pr: 5, // Add padding to avoid overlap with close button
          }}
        >
          בר מצווה לדניאל
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            pr: 5, // Add padding to avoid overlap with close button
          }}
        >
          שמחת בר המצווה
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ flex: 1, pt: 2, px: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem 
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            sx={{
              mx: 0,
              mb: 1,
              px: 3,
              borderRadius: 3,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              background: location.pathname === item.path 
                ? 'rgba(255, 255, 255, 0.15)' 
                : 'transparent',
              border: location.pathname === item.path 
                ? '1px solid rgba(255, 255, 255, 0.2)' 
                : '1px solid transparent',
              backdropFilter: location.pathname === item.path ? 'blur(10px)' : 'none',
              boxShadow: location.pathname === item.path 
                ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
                : 'none',
              animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`,
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateX(-8px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              },
              '&:active': {
                transform: 'translateX(-4px) scale(0.98)',
              },
              '@keyframes slideInRight': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(30px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              }
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '1.1rem',
                textAlign: 'right',
                '& .MuiListItemText-primary': {
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }
              }}
            />
            {location.pathname === item.path && (
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#FFD700',
                  ml: 2,
                  boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.7, transform: 'scale(1.2)' }
                  }
                }}
              />
            )}
          </ListItem>
        ))}
      </List>

      {/* Footer Section */}
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(0, 0, 0, 0.1)',
          borderBottomLeftRadius: '24px',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.8rem',
          }}
        >
          נשמח לראותכם בשמחתנו! 🎉
        </Typography>
      </Box>
    </Box>
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
        {/* Star and Celebration Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            gap: 2,
            zIndex: 1
          }}
        >
          <Star sx={{ fontSize: 24, color: '#FFD700' }} />
          <Celebration sx={{ fontSize: 32, color: '#FFD700' }} />
          <Star sx={{ fontSize: 24, color: '#FFD700' }} />
        </Box>

        {/* Mute/Unmute Button - Top Left */}
                <Box sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                  <IconButton
                    color="inherit"
                    aria-label={isMuted ? "unmute" : "mute"}
                    onClick={handleMuteToggle}
                    sx={{
                      color: isMuted ? '#dc2626' : '#1e3a8a',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: isMuted ? '1px solid rgba(220, 38, 38, 0.2)' : '1px solid rgba(30, 58, 138, 0.2)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        background: isMuted ? 'rgba(220, 38, 38, 0.1)' : 'rgba(30, 58, 138, 0.1)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                      },
                      '&:active': {
                        transform: 'scale(0.95)',
                      }
                    }}
                  >
                    {isMuted ? <VolumeOff sx={{ fontSize: 24 }} /> : <VolumeUp sx={{ fontSize: 24 }} />}
                  </IconButton>
                </Box>

        {/* Hamburger Menu Button - Top Right */}
        <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMobileOpen(true)}
            sx={{ 
              color: '#1e3a8a',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(30, 58, 138, 0.2)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background: 'rgba(30, 58, 138, 0.1)',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              }
            }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 260,
              background: `
                linear-gradient(135deg, 
                  rgba(30, 58, 138, 0.95) 0%, 
                  rgba(59, 130, 246, 0.9) 50%, 
                  rgba(147, 197, 253, 0.85) 100%
                )
              `,
              backdropFilter: 'blur(20px)',
              color: '#ffffff',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)',
              right: 0,
              left: 'auto',
              transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
              position: 'fixed',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: mobileOpen 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                : 'none',
              overflow: 'hidden',
              borderTopLeftRadius: '24px',
              borderBottomLeftRadius: '24px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)
                `,
                zIndex: 0,
              },
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
            {drawer}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
