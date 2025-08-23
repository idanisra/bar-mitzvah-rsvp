import { useState, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

interface FormData {
  name: string;
  phone: string;
  email: string;
  attending: string;
  numberOfGuests: string;
  message: string;
}

const useRSVPForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    attending: '',
    numberOfGuests: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = (): void => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      attending: '',
      numberOfGuests: '',
      message: ''
    });
  };

  return {
    formData,
    handleChange,
    resetForm
  };
};

export default useRSVPForm;
