import { Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import { Hotel, DirectionsCar, Restaurant, Celebration } from '@mui/icons-material';
import { Box } from '@mui/material';

const SpecialPerks = () => {
  const theme = useTheme();

  const perks = [
    {
      icon: <Hotel sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "לינה במלון",
      description: "מחירים מיוחדים במלון ורט לכל סוף השבוע"
    },
    {
      icon: <DirectionsCar sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "הסעה",
      description: "שירות הסעה בין המקומות והמלון"
    },
    {
      icon: <Restaurant sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "כל הארוחות כלולות",
      description: "ארוחות שבת וארוחת ערב חגיגית ביום שני"
    },
    {
      icon: <Celebration sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "חוויה VIP",
      description: "מושבים מועדפים והכרה מיוחדת"
    }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {perks.map((perk, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <Box sx={{ mb: 1 }}>
                {perk.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {perk.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {perk.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SpecialPerks;
