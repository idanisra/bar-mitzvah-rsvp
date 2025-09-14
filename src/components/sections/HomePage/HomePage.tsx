import { Box } from '@mui/material';
import EventsSectionNew from './components/EventsSectionNew';
import { getAllEvents } from '../../../config/events';

const HomePage = () => {
  const allEvents = getAllEvents();

  return (
    <Box>
      <EventsSectionNew events={allEvents} />
    </Box>
  );
};

export default HomePage;
