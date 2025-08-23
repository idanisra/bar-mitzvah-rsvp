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
    <Box >
      {/* Background Pattern Overlay */}
      <Box  />
      
      <Box >
        <Typography
          variant={isMobile ? 'h3' : 'h1'}
          
        >
          בר מצווה לדניאל
        </Typography>
        
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          
        >
          חגיגה מיוחדת ומרגשת
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={handleRSVP}
          
        >
          אישור השתתפות
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
