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
      setCurrentEvent(newEvent as any);
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      mb: 4,
      p: 2,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 2,
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2, 
          color: theme.palette.primary.main,
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
            color: theme.palette.primary.main,
            fontWeight: 600,
            textTransform: 'none',
            minWidth: 140,
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              }
            },
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            }
          }
        }}
      >
        <ToggleButton value="shabbat-chatan" aria-label="shabbat chatan">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ display: 'block', mb: 0.5 }}>
              {EVENTS['shabbat-chatan'].nameHebrew}
            </Typography>
            <Typography variant="caption" sx={{ display: 'block' }}>
              {EVENTS['shabbat-chatan'].name}
            </Typography>
          </Box>
        </ToggleButton>
        
        <ToggleButton value="hanachat-tefillin" aria-label="hanachat tefillin">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ display: 'block', mb: 0.5 }}>
              {EVENTS['hanachat-tefillin'].nameHebrew}
            </Typography>
            <Typography variant="caption" sx={{ display: 'block' }}>
              {EVENTS['hanachat-tefillin'].name}
            </Typography>
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default EventSelector;
