import { Card, CardContent, Typography } from '@mui/material';
import { Event } from '../../../types/events';

interface EventDescriptionProps {
  event: Event;
}

const EventDescription = ({ event }: EventDescriptionProps) => {
  return (
    <Card sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          About the Event
        </Typography>
        <Typography variant="body1" paragraph>
          {event.description}
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          {event.descriptionHebrew}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventDescription;
