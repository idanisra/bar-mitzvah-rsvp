import { Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import { Hotel, DirectionsCar, Restaurant, Celebration } from '@mui/icons-material';
import { Box } from '@mui/material';

const SpecialPerks = () => {
  const theme = useTheme();

  const perks = [
    {
      icon: <Hotel sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "Hotel Accommodation",
      description: "Special rates at Vert Hotel for the entire weekend"
    },
    {
      icon: <DirectionsCar sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "Transportation",
      description: "Shuttle service between venues and hotel"
    },
    {
      icon: <Restaurant sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "All Meals Included",
      description: "Shabbat meals and Monday celebration dinner"
    },
    {
      icon: <Celebration sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "VIP Experience",
      description: "Priority seating and special recognition"
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
