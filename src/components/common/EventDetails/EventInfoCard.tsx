import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

interface EventInfoCardProps {
  icon: ReactNode;
  title: string;
  primaryText: string;
  secondaryText: string;
  gridProps?: {
    xs: number;
    sm: number;
    md: number;
  };
}

const EventInfoCard = ({ 
  icon, 
  title, 
  primaryText, 
  secondaryText, 
  gridProps = { xs: 12, sm: 6, md: 3 } 
}: EventInfoCardProps) => {
  return (
    <Grid item {...gridProps}>
      <Card sx={{ height: '100%', textAlign: 'center' }}>
        <CardContent>
          <Box sx={{ fontSize: 40, color: 'primary.main', mb: 3 }}>
            {icon}
          </Box>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {primaryText}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {secondaryText}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventInfoCard;
