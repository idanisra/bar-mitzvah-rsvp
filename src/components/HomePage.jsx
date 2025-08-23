import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Event as EventIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Person as PersonIcon,
  Celebration as CelebrationIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleRSVP = () => {
    navigate('/rsvp');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      {/* Hero Section - Full Screen */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          py: { xs: 4, sm: 6, md: 8, lg: 10 },
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Main Title */}
        <Typography
          variant={isMobile ? "h2" : isTablet ? "h1" : "h1"}
          sx={{
            fontFamily: 'Heebo, sans-serif',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: { xs: 3, sm: 4, md: 5 },
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
            lineHeight: 1.2,
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          🎊 בר מצווה לדניאל 🎊
        </Typography>
        
        {/* Subtitle */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontFamily: 'Heebo, sans-serif',
            fontWeight: 600,
            color: '#ffffff',
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          חגיגה מיוחדת ומרגשת
        </Typography>
        
        {/* Description */}
        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{
            fontFamily: 'Heebo, sans-serif',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: { xs: '100%', sm: 600, md: 800 },
            mx: 'auto',
            mb: { xs: 4, sm: 6, md: 8 },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          הזמנה חמה לחגוג יחד איתנו את בר המצווה המיוחד של דניאל
          <br />
          ערב מלא בשמחה, מוזיקה, ואוכל טעים
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleRSVP}
          startIcon={<EventIcon />}
          endIcon={<ArrowForwardIcon />}
          sx={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
            fontWeight: 700,
            borderRadius: '50px',
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
            '&:hover': {
              background: 'linear-gradient(45deg, #FF5252, #26A69A, #1976D2)',
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            px: { xs: 4, sm: 6, md: 8, lg: 10 },
            py: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            }
          }}
        >
          אישור השתתפות עכשיו
        </Button>
      </Box>

      {/* Event Details Section */}
      <Box
        sx={{
          py: { xs: 6, sm: 8, md: 10, lg: 12 },
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          zIndex: 1,
          width: '100%'
        }}
      >
        {/* Section Title */}
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            fontFamily: 'Heebo, sans-serif',
            fontWeight: 700,
            textAlign: 'center',
            mb: { xs: 4, sm: 6, md: 8 },
            background: 'linear-gradient(45deg, #1976d2, #4ECDC4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          פרטי האירוע
        </Typography>

        {/* Event Details Cards */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              elevation={8}
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
                borderRadius: 4,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px) rotate(2deg)',
                  boxShadow: '0 20px 40px rgba(255, 107, 107, 0.4)',
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: { xs: 3, sm: 4 } }}>
                <Box sx={{ mb: 3 }}>
                  <EventIcon sx={{ 
                    fontSize: { xs: 50, sm: 60, md: 80 }, 
                    color: '#ffffff',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }} />
                </Box>
                <Typography variant={isMobile ? "h6" : "h5"} sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  mb: 2,
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  תאריך
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}>
                  15 בדצמבר 2024
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card 
              elevation={8}
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
                borderRadius: 4,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px) rotate(-2deg)',
                  boxShadow: '0 20px 40px rgba(78, 205, 196, 0.4)',
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: { xs: 3, sm: 4 } }}>
                <Box sx={{ mb: 3 }}>
                  <TimeIcon sx={{ 
                    fontSize: { xs: 50, sm: 60, md: 80 }, 
                    color: '#ffffff',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }} />
                </Box>
                <Typography variant={isMobile ? "h6" : "h5"} sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  mb: 2,
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  שעה
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}>
                  19:00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card 
              elevation={8}
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #FF9800, #F57C00)',
                borderRadius: 4,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px) rotate(2deg)',
                  boxShadow: '0 20px 40px rgba(255, 152, 0, 0.4)',
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: { xs: 3, sm: 4 } }}>
                <Box sx={{ mb: 3 }}>
                  <LocationIcon sx={{ 
                    fontSize: { xs: 50, sm: 60, md: 80 }, 
                    color: '#ffffff',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }} />
                </Box>
                <Typography variant={isMobile ? "h6" : "h5"} sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  mb: 2,
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  מיקום
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}>
                  אולם אירועים ירושלים
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card 
              elevation={8}
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #9C27B0, #7B1FA2)',
                borderRadius: 4,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px) rotate(-2deg)',
                  boxShadow: '0 20px 40px rgba(156, 39, 176, 0.4)',
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: { xs: 3, sm: 4 } }}>
                <Box sx={{ mb: 3 }}>
                  <PersonIcon sx={{ 
                    fontSize: { xs: 50, sm: 60, md: 80 }, 
                    color: '#ffffff',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }} />
                </Box>
                <Typography variant={isMobile ? "h6" : "h5"} sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  mb: 2,
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  אירוע
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Heebo, sans-serif', 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}>
                  בר מצווה
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* What to Expect Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ mb: 4 }}>
            <CelebrationIcon sx={{ 
              fontSize: { xs: 60, sm: 80, md: 100 }, 
              color: '#FF6B6B',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
            }} />
          </Box>
          
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 700,
              color: '#1976d2',
              mb: 4
            }}
          >
            מה צפוי לנו?
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Heebo, sans-serif',
              color: '#666',
              mb: 6,
              lineHeight: 1.8,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            ערב מיוחד ומרגש עם תפילות, ברכות, מוזיקה חיה, ארוחה חגיגית ומסיבה נהדרת.
            <br />
            נשמח לראותכם שם כדי לחגוג יחד איתנו את המאורע המיוחד הזה!
          </Typography>

          <Button
            variant="outlined"
            size="large"
            onClick={handleRSVP}
            startIcon={<EventIcon />}
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: 'Heebo, sans-serif',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              fontWeight: 600,
              borderRadius: '50px',
              borderColor: '#FF6B6B',
              color: '#FF6B6B',
              borderWidth: '3px',
              '&:hover': {
                borderColor: '#FF5252',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 12px 30px rgba(255, 107, 107, 0.3)',
              },
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              px: { xs: 5, sm: 7, md: 8 },
              py: { xs: 2, sm: 2.5, md: 3 }
            }}
          >
            אישור השתתפות עכשיו
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
