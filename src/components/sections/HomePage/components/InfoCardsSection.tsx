import { Container, Grid } from '@mui/material';
import InfoCard from './InfoCard';

const InfoCardsSection = () => {
  const infoCards = [
    {
      title: "What to Bring",
      items: [
        "Your beautiful smile",
        "Comfortable shoes for dancing",
        "Camera for memories",
        "Gift (optional but appreciated)"
      ]
    },
    {
      title: "Important Notes",
      items: [
        "Please arrive 15 minutes early",
        "Parking available on-site",
        "Dress code: Semi-formal to formal",
        "Children welcome with supervision"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mb: 6 }}>
      <Grid container spacing={4}>
        {infoCards.map((card, index) => (
          <Grid item xs={12} md={6} key={index}>
            <InfoCard
              title={card.title}
              items={card.items}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoCardsSection;
