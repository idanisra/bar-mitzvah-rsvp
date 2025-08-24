import { Container, Typography, Grid, useTheme } from '@mui/material';
import EventCard from './EventCard';

const EventHighlightsSection = () => {
  const theme = useTheme();

  const highlights = [
    {
      icon: "🎉",
      title: "Celebration",
      details: [
        "Special moments with family and friends",
        "Traditional Jewish customs and rituals",
        "Beautiful venue and atmosphere"
      ]
    },
    {
      icon: "🍽️",
      title: "Dining",
      details: [
        "Delicious kosher cuisine",
        "Special dietary accommodations",
        "Festive meal service"
      ]
    },
    {
      icon: "🎵",
      title: "Entertainment",
      details: [
        "Live music and celebration",
        "Traditional Jewish music",
        "Joyful atmosphere"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mb: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          textAlign: 'center', 
          mb: 4,
          fontWeight: 600,
          color: theme.palette.primary.main
        }}
      >
        Event Highlights
      </Typography>
      
      <Grid container spacing={4}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} md={4} key={index}>
            <EventCard
              icon={highlight.icon}
              title={highlight.title}
              details={highlight.details}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventHighlightsSection;
