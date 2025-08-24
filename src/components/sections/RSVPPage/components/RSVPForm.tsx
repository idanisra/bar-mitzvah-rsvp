import { useState } from 'react';
import { Paper, Box } from '@mui/material';
import { useEvent } from '../../../../contexts/EventContext';
import { EVENTS } from '../../../../config/events';
import { EventType } from '../../../../types/events';
import FormHeader from './FormHeader';
import FormFields from './FormFields';
import FormSubmit from './FormSubmit';
import ErrorAlert from './ErrorAlert';
import SuccessMessage from './SuccessMessage';
import EventSelectionSection from './RSVPForm/EventSelectionSection';
import SelectedEventsDisplay from './RSVPForm/SelectedEventsDisplay';

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
      // Simulate API call
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
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <FormHeader />
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {/* Event Selection */}
        <EventSelectionSection
          selectedEvents={selectedEvents}
          rsvpForBoth={rsvpForBoth}
          onEventSelection={handleEventSelection}
          onBothEventsChange={handleBothEventsChange}
        />

        {/* Selected Events Display */}
        <SelectedEventsDisplay selectedEvents={selectedEventsData} />

        <ErrorAlert error={error} />
        
        <FormFields formData={formData} handleChange={handleChange} />
        
        <FormSubmit loading={loading} />
      </Box>
    </Paper>
  );
};

export default RSVPForm;
