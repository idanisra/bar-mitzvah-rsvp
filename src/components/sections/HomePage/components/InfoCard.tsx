import { Typography, Card, CardContent, Box } from '@mui/material';

interface InfoCardProps {
  title: string;
  items: string[];
}

const InfoCard = ({ title, items }: InfoCardProps) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {items.map((item: string, index: number) => (
            <Box component="li" key={index} sx={{ mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
