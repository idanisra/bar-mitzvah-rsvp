import { Container, Grid } from '@mui/material';
import InfoCard from './InfoCard';

const InfoCardsSection = () => {
  const infoCards = [
    {
      title: "מה להביא",
      items: [
        "החיוך היפה שלכם",
        "נעליים נוחות לריקודים",
        "מצלמה לזיכרונות",
        "מתנה (אופציונלי אבל מוערך)"
      ]
    },
    {
      title: "הערות חשובות",
      items: [
        "אנא הגיעו 15 דקות מוקדם",
        "חניה זמינה במקום",
        "קוד לבוש: חצי רשמי עד רשמי",
        "ילדים מתקבלים בברכה עם השגחה"
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
