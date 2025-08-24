import { Container, Typography, Grid, useTheme } from '@mui/material';
import EventCard from './EventCard';

const EventHighlightsSection = () => {
  const theme = useTheme();

  const highlights = [
    {
      icon: "🎉",
      title: "חגיגה",
      details: [
        "רגעים מיוחדים עם משפחה וחברים",
        "מנהגים וטקסים יהודיים מסורתיים",
        "מקום יפה ואווירה נפלאה"
      ]
    },
    {
      icon: "🍽️",
      title: "אוכל",
      details: [
        "מטבח כשר טעים",
        "התאמות תזונתיות מיוחדות",
        "שירות ארוחות חגיגי"
      ]
    },
    {
      icon: "🎵",
      title: "בידור",
      details: [
        "מוזיקה חיה וחגיגה",
        "מוזיקה יהודית מסורתית",
        "אווירה שמחה"
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
        הדגשים של האירוע
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
