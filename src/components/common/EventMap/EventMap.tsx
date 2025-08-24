import { Box, Card, CardContent } from '@mui/material';
import { Event } from '../../../types/events';
import EventMapHeader from './EventMapHeader';
import EventLocationCard from './EventLocationCard';
import { openInMaps, openAddressInMaps } from './navigationUtils';

interface EventMapProps {
  events: Event[];
  title?: string;
  titleHebrew?: string;
}

const EventMap = ({ events, title = "Event Locations", titleHebrew = "מיקומי האירועים" }: EventMapProps) => {
  return (
    <Card sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <CardContent>
        <EventMapHeader title={title} titleHebrew={titleHebrew} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          alignItems: 'center'
        }}>
          {events.map((event, index) => (
            <EventLocationCard
              key={event.id}
              event={event}
              index={index}
              onNavigate={openInMaps}
              onViewAddress={openAddressInMaps}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventMap;
