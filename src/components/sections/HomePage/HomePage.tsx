import { Box, Container } from '@mui/material';
import EventSelector from '../../common/EventSelector';
import EventDetails from '../../common/EventDetails';
import DualEventSection from './components/DualEventSection';
import HeroSection from './components/HeroSection';
import EventHighlightsSection from './components/EventHighlightsSection';
import InfoCardsSection from './components/InfoCardsSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import FinalCTASection from './components/FinalCTASection';
import InteractiveMap from '../../common/InteractiveMap';
import { getAllEvents } from '../../../config/events';

const HomePage = () => {
  const allEvents = getAllEvents();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Event Selector */}
      <Container maxWidth="lg">
        <EventSelector />
      </Container>

      {/* Event Details */}
      <Container maxWidth="lg">
        <EventDetails />
      </Container>

      {/* Interactive Event Map */}
      <Container maxWidth="lg">
        <InteractiveMap 
          events={allEvents}
          titleHebrew="מיקומי האירועים"
        />
      </Container>

      {/* Special Section for Dual Event Guests */}
      <Container maxWidth="lg">
        <DualEventSection />
      </Container>

      {/* Event Highlights */}
      <Container maxWidth="lg">
        <EventHighlightsSection />
      </Container>

      {/* Information Cards */}
      <Container maxWidth="lg">
        <InfoCardsSection />
      </Container>

      {/* Additional Information Section */}
      <Container maxWidth="lg">
        <AdditionalInfoSection />
      </Container>

      {/* Final Call to Action */}
      <Container maxWidth="lg">
        <FinalCTASection />
      </Container>
    </Box>
  );
};

export default HomePage;
