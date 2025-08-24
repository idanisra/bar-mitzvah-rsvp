import { Box, Typography, useTheme } from '@mui/material';
import { Event } from '../../../types/events';

interface EventHeaderProps {
  event: Event;
}

const EventHeader = ({ event }: EventHeaderProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          mb: 2,
          fontWeight: 700,
          color: theme.palette.primary.main,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        {event.nameHebrew}
      </Typography>
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          mb: 3,
          color: theme.palette.text.secondary,
          fontWeight: 400
        }}
      >
        {event.name}
      </Typography>
    </Box>
  );
};

export default EventHeader;
