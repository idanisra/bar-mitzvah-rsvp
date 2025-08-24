import { Box, Typography, Button, useTheme } from '@mui/material';
import WeekendTimeline from './DualEventSection/WeekendTimeline';
import SpecialPerks from './DualEventSection/SpecialPerks';

const DualEventSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 2,
            fontWeight: 700,
            color: theme.palette.secondary.main,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          ✨ מיוחד לשתי האירועים ✨
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: theme.palette.text.secondary,
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          אתם מוזמנים לשתי החגיגות! הנה כל מה שאתם צריכים לדעת לחוויה המלאה.
        </Typography>
      </Box>

      {/* Weekend Timeline */}
      <WeekendTimeline />

      {/* Special Perks */}
      <SpecialPerks />

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center' }}>
        <Button 
          variant="contained" 
          size="large" 
          href="/rsvp"
          sx={{ 
            px: 4, 
            py: 2, 
            fontSize: '1.1rem',
            fontWeight: 600,
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            }
          }}
        >
          אישור השתתפות לשתי האירועים
        </Button>
      </Box>
    </Box>
  );
};

export default DualEventSection;
