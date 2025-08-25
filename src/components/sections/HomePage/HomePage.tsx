import { Box, Container } from '@mui/material';
import EventSelector from '../../common/EventSelector';
import EventDetails from '../../common/EventDetails';
import DualEventSection from './components/DualEventSection';
import HeroSection from './components/HeroSection';
import InfoCardsSection from './components/InfoCardsSection';
import FinalCTASection from './components/FinalCTASection';
import EnhancedEventMap from '../../common/EnhancedEventMap';
import { getAllEvents } from '../../../config/events';

const HomePage = () => {
  const allEvents = getAllEvents();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Event Selector - Moved to top */}
      <Container maxWidth="lg" sx={{ mt: 0.5, mb: 3 }}>
        <EventSelector />
      </Container>

      {/* Event Details */}
      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <EventDetails />
      </Container>

      {/* Enhanced Event Map */}
      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <EnhancedEventMap 
          events={allEvents}
          titleHebrew="מיקומי האירועים"
        />
      </Container>

      {/* Special Section for Dual Event Guests */}
      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <DualEventSection />
      </Container>

      {/* Information Cards */}
      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <InfoCardsSection />
      </Container>

      {/* Final Call to Action */}
      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <FinalCTASection />
      </Container>
    </Box>
  );
};

export default HomePage;
