import { Button, Box } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

interface FormSubmitProps {
  loading: boolean;
}

const FormSubmit = ({ loading }: FormSubmitProps) => {
  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
        startIcon={<SendIcon />}
        sx={{ minWidth: 200 }}
      >
        {loading ? 'שולח...' : 'שלח אישור השתתפות'}
      </Button>
    </Box>
  );
};

export default FormSubmit;
