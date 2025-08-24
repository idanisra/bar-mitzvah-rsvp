import { Box, Typography } from '@mui/material';

interface EventMapHeaderProps {
  title: string;
  titleHebrew: string;
}

const EventMapHeader = ({ title, titleHebrew }: EventMapHeaderProps) => {
  return (
    <Box sx={{ textAlign: 'center', mb: 3 }}>
      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
        {titleHebrew}
      </Typography>
      <Typography variant="h6" component="h4" color="text.secondary">
        {title}
      </Typography>
    </Box>
  );
};

export default EventMapHeader;
