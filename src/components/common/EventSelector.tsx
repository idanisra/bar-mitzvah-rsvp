import { Box, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { useEvent } from '../../contexts/EventContext';
import { EVENTS } from '../../config/events';

const EventSelector = () => {
  const { currentEvent, setCurrentEvent } = useEvent();
  const theme = useTheme();

  const handleEventChange = (
    _: React.MouseEvent<HTMLElement>,
    newEvent: string | null,
  ) => {
    if (newEvent !== null) {
      setCurrentEvent(newEvent as 'shabbat-chatan' | 'hanachat-tefillin');
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      <Typography 
        variant="h1" 
        sx={{ 
          mb: 2, 
          mt: 0, // No top margin to bring text as close as possible to top bar
          textAlign: 'center',
          color: '#DAA520', // Gold color
          fontWeight: 700,
          fontFamily: 'Stam, serif',
          fontSize: '8rem', // Doubled from 4rem to 8rem
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        דניאל
      </Typography>
      
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2, 
          textAlign: 'center',
          color: '#DAA520', // Gold color
          fontWeight: 600
        }}
      >
        בחירת אירוע
      </Typography>
      
      <ToggleButtonGroup
        value={currentEvent}
        exclusive
        onChange={handleEventChange}
        aria-label="event selection"
        sx={{
          '& .MuiToggleButton-root': {
            px: 3,
            py: 1.5,
            border: `2px solid ${theme.palette.primary.main}`,
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            minWidth: 140,
            borderRadius: '8px',
            backgroundColor: 'transparent',
            '&:first-of-type': {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            '&:last-of-type': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            '&.Mui-selected': {
              backgroundColor: 'white',
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }
        }}
      >
        <ToggleButton value="shabbat-chatan" aria-label="שבת חתן">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ display: 'block', mb: 0.5 }}>
              {EVENTS['shabbat-chatan'].nameHebrew}
            </Typography>
          </Box>
        </ToggleButton>
        
        <ToggleButton value="hanachat-tefillin" aria-label="הנחת תפילין">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ display: 'block', mb: 0.5 }}>
              {EVENTS['hanachat-tefillin'].nameHebrew}
            </Typography>
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default EventSelector;
