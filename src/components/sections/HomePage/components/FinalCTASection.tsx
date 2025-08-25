import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { Celebration as CelebrationIcon } from '@mui/icons-material';

const FinalCTASection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleRSVP = () => {
    navigate('/rsvp');
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          sx={{ mb: 1 }}
        >
          נשמח לראותכם!
        </Typography>
        
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          sx={{ mb: 2 }}
        >
          בואו לחגוג איתנו את בר המצווה המיוחד של דניאל
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={handleRSVP}
          startIcon={<CelebrationIcon />}
          
        >
          אישור השתתפות עכשיו
        </Button>
      </Box>
    </Box>
  );
};

export default FinalCTASection;
