import { Box, Typography } from '@mui/material';
import { Event } from '../../../../../../types/events';

interface SelectedEventsDisplayProps {
  selectedEvents: Event[];
}

const SelectedEventsDisplay = ({ selectedEvents }: SelectedEventsDisplayProps) => {
  if (selectedEvents.length === 0) return null;

  return (
    <Box sx={{ 
      mb: 3, 
      p: 2, 
      backgroundColor: 'rgba(25, 118, 210, 0.05)', 
      borderRadius: 1,
      border: '1px solid rgba(25, 118, 210, 0.2)'
    }}>
      <Typography variant="h6" gutterBottom>
        אירועים נבחרים:
      </Typography>
      {selectedEvents.map((event, index) => (
        <Box key={event.id} sx={{ mb: index < selectedEvents.length - 1 ? 1 : 0 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {event.nameHebrew}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                          {event.dateHebrew} • {event.locationHebrew}
          </Typography>
          {event.startTime && (
            <Typography variant="body2" color="text.secondary">
              שעה: {event.startTime}
              {event.endTime && ` - ${event.endTime}`}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default SelectedEventsDisplay;
