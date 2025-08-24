import { Box } from '@mui/material';
import { useEvent } from '../../../contexts/EventContext';
import { EVENTS } from '../../../config/events';
import EventHeader from './EventHeader';
import EventInfoGrid from './EventInfoGrid';
import EventDescription from './EventDescription';
import EventAdditionalInfo from './EventAdditionalInfo';

const EventDetails = () => {
  const { currentEvent } = useEvent();
  const event = EVENTS[currentEvent];

  if (!event) return null;

  return (
    <Box sx={{ mb: 6 }}>
      <EventHeader event={event} />
      <EventInfoGrid event={event} />
      <EventDescription event={event} />
      <EventAdditionalInfo event={event} />
    </Box>
  );
};

export default EventDetails;
