import { Box, Typography, Grid, Container } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import InfoCard from './InfoCard';

const AdditionalInfoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const infoData = [
    {
      title: 'הנחיות לבוש',
      items: [
        'לבוש חגיגי מתאים',
        'כיסוי ראש למי שמעוניין',
        'נעליים נוחות לריקודים'
      ]
    },
    {
      title: 'פעילויות',
      items: [
        'תפילה חגיגית',
        'סעודה חגיגית',
        'ריקודים ומוזיקה'
      ]
    }
  ];

  return (
    <Box >
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          
        >
          מידע נוסף
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {infoData.map((info, index) => (
            <Grid item xs={12} md={6} key={index}>
              <InfoCard {...info} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdditionalInfoSection;
