import { Box, Typography, Card, CardContent } from '@mui/material';

const InfoCard = ({ title, items }) => {

  return (
    <Card >
      <CardContent >
        <Typography variant="h6" >
          {title}
        </Typography>
        
        {items.map((item, index) => (
          <Typography 
            key={index} 
            variant="body1" 
            
          >
            • {item}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
