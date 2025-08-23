import { Box, Paper } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase';
import FormHeader from './FormHeader';
import FormFields from './FormFields';
import FormSubmit from './FormSubmit';
import SuccessMessage from './SuccessMessage';
import ErrorAlert from './ErrorAlert';
import useRSVPForm from '../hooks/useRSVPForm';

const RSVPForm = () => {
  const { formData, handleChange, resetForm } = useRSVPForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'rsvp'), {
        ...formData,
        timestamp: new Date(),
        status: 'pending'
      });
      
      setSuccess(true);
      resetForm();
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('אירעה שגיאה בשליחת אישור ההשתתפות. אנא נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <SuccessMessage onReset={() => window.location.reload()} />;
  }

  return (
    <Box >
      {/* Background Pattern Overlay */}
      <Box  />
      
      <Paper >
        <FormHeader />
        
        {error && <ErrorAlert error={error} />}
        
        <Box component="form" onSubmit={handleSubmit} >
          <FormFields formData={formData} handleChange={handleChange} />
          <FormSubmit loading={loading} />
        </Box>
      </Paper>
    </Box>
  );
};

export default RSVPForm;
