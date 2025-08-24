import { Card, CardContent, Typography, Box } from '@mui/material';

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const EventCard = ({ icon, title, details }: EventCardProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Box sx={{ mb: 2, fontSize: '3rem' }}>
          {icon}
        </Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {details.map((detail: string, index: number) => (
            <Box component="li" key={index} sx={{ mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
