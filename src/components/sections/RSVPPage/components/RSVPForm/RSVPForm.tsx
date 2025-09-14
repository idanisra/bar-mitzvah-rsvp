import { useState } from 'react';
import { Box } from '@mui/material';
import { useEvent } from '../../../../../contexts/EventContext';
import { EVENTS } from '../../../../../config/events';
import { EventType } from '../../../../../types/events';
import FormHeader from '../FormHeader/FormHeader';
import FormFields from '../FormFields/FormFields';
import FormSubmit from '../FormSubmit/FormSubmit';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import EventSelectionSection from './EventSelectionSection/EventSelectionSection';
import SelectedEventsDisplay from './SelectedEventsDisplay/SelectedEventsDisplay';

interface FormData {
  [key: string]: string;
}

const RSVPForm = () => {
  const { currentEvent } = useEvent();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<EventType[]>([currentEvent]);
  const [rsvpForBoth, setRsvpForBoth] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    guests: '',
    dietary: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventSelection = (eventType: EventType, checked: boolean) => {
    if (checked) {
      setSelectedEvents(prev => [...prev, eventType]);
    } else {
      setSelectedEvents(prev => prev.filter(event => event !== eventType));
    }
  };

  const handleBothEventsChange = (checked: boolean) => {
    setRsvpForBoth(checked);
    if (checked) {
      setSelectedEvents(['shabbat-chatan', 'hanachat-tefillin']);
    } else {
      setSelectedEvents([currentEvent]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '',
      dietary: '',
      message: ''
    });
    setSelectedEvents([currentEvent]);
    setRsvpForBoth(false);
  };

  const selectedEventsData = selectedEvents.map(eventId => EVENTS[eventId]);

  if (success) {
    return <SuccessMessage onReset={handleReset} />;
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: 4,
        boxShadow: `
          0 20px 40px rgba(0,0,0,0.1),
          0 10px 20px rgba(0,0,0,0.06),
          0 0 0 1px rgba(255,255,255,0.1)
        `,
        border: '1px solid rgba(255,255,255,0.2)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 50% 0%, rgba(30, 58, 138, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)
          `,
        }
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2, p: { xs: 3, md: 4 } }}>
        <FormHeader />
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          
          <EventSelectionSection
            selectedEvents={selectedEvents}
            rsvpForBoth={rsvpForBoth}
            onEventSelection={handleEventSelection}
            onBothEventsChange={handleBothEventsChange}
          />

          
          <SelectedEventsDisplay selectedEvents={selectedEventsData} />

          <ErrorAlert error={error} />
          
          <FormFields formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} />
          
          <FormSubmit loading={loading} />
        </Box>
      </Box>
    </Box>
  );
};

export default RSVPForm;
