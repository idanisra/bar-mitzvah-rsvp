import { Box, Typography, Grid, Container } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import EventCard from './EventCard';

const EventDetailsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const eventDetails = [
    {
      icon: '🕐',
      title: 'תאריך ושעה',
      details: ['שבת, 15 בדצמבר 2024', '18:00 - 22:00']
    },
    {
      icon: '📍',
      title: 'מיקום',
      details: ['אולם אירועים "הר הצופים"', 'רחוב הרצל 123, תל אביב']
    },
    {
      icon: '🍽️',
      title: 'כיבוד',
      details: ['ארוחה כשרה מלאה', 'משקאות וקינוחים']
    }
  ];

  return (
    <Box >
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          
        >
          פרטי האירוע
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {eventDetails.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard {...event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventDetailsSection;
