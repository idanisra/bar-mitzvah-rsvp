import { Box, Typography, Card, CardContent } from '@mui/material';

const EventCard = ({ icon, title, details }) => {

  return (
    <Card >
      <CardContent >
        <Box >
          <Typography >
            {icon}
          </Typography>
        </Box>
        
        <Typography variant="h6" >
          {title}
        </Typography>
        
        {details.map((detail, index) => (
          <Typography 
            key={index} 
            variant="body1" 
            
          >
            {detail}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default EventCard;
