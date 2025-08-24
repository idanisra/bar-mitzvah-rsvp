import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

const HeroSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleRSVP = () => {
    navigate('/rsvp');
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

      }}
    >
      <Box 
        sx={{
          textAlign: 'center',
          color: 'white',
          zIndex: 2,
          position: 'relative',
          px: 4
        }}
      >
        <Typography
          variant={isMobile ? 'h3' : 'h1'}
          sx={{ 
            fontWeight: 900, 
            mb: 3,
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}
        >
          בר מצווה לדניאל
        </Typography>
        
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          sx={{ 
            mb: 4,
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
          }}
        >
          חגיגה מיוחדת ומרגשת
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={handleRSVP}
          sx={{
            px: 4,
            py: 2,
            fontSize: '1.2rem',
            fontWeight: 600,
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            }
          }}
        >
          אישור השתתפות
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
