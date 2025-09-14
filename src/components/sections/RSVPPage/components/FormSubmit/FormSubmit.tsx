import { Box } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import MobileOptimizedButton from '../../../../../components/ui/buttons/MobileOptimizedButton/MobileOptimizedButton';

interface FormSubmitProps {
  loading: boolean;
}

const FormSubmit = ({ loading }: FormSubmitProps) => {
  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <MobileOptimizedButton
        type="submit"
        variant="contained"
        size="large"
        loading={loading}
        startIcon={<SendIcon />}
        sx={{ 
          minWidth: 200,
          background: 'linear-gradient(45deg, #1e3a8a 30%, #3b82f6 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1e40af 30%, #2563eb 90%)',
          }
        }}
      >
        שלח אישור השתתפות
      </MobileOptimizedButton>
    </Box>
  );
};

export default FormSubmit;
