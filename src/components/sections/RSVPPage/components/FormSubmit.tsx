import { Box, Button, CircularProgress } from '@mui/material';

const FormSubmit = ({ loading }) => {

  return (
    <Box >
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
        
      >
        {loading ? (
          <CircularProgress size={28} color="inherit" />
        ) : (
          '🎉 שלח אישור השתתפות 🎉'
        )}
      </Button>
    </Box>
  );
};

export default FormSubmit;
