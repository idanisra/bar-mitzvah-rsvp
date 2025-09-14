import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Event } from '../../../../types/events';
import EventsGrid from '../../home/components/Events/EventsGrid/EventsGrid';

interface EventsSectionNewProps {
  events: Event[];
}

const EventsSectionNew: React.FC<EventsSectionNewProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEventClick = (eventId: string) => {
    setSelectedEvent(prev => prev === eventId ? null : eventId);
  };

  return (
    <Box
      sx={{
        pt: 0,
        pb: 0,
        mt: 0,
        position: 'relative',
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        <EventsGrid 
          events={events}
          selectedEvent={selectedEvent}
          isLoading={isLoading}
          onEventClick={handleEventClick}
        />
      </Container>
    </Box>
  );
};

export default EventsSectionNew;
