import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import EventDetailsSection from './components/EventDetailsSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import FinalCTASection from './components/FinalCTASection';

const HomePage = () => {

  return (
    <Box >
      <HeroSection />
      <EventDetailsSection />
      <AdditionalInfoSection />
      <FinalCTASection />
    </Box>
  );
};

export default HomePage;
