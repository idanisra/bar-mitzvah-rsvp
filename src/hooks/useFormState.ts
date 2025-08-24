import { useState, useCallback, useMemo } from 'react';
import { FORM_FIELDS } from '../constants/forms';

export interface FormData {
  [key: string]: string;
}

export interface UseFormStateReturn {
  formData: FormData;
  updateField: (name: string, value: string) => void;
  updateMultipleFields: (updates: Partial<FormData>) => void;
  resetForm: () => void;
  isFormDirty: boolean;
  hasChanges: (fieldName?: string) => boolean;
  getFieldValue: (name: string) => string;
}

/**
 * Custom hook for managing form state
 */
export const useFormState = (initialData: FormData): UseFormStateReturn => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [originalData] = useState<FormData>({ ...initialData });

  const updateField = useCallback((name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const updateMultipleFields = useCallback((updates: Partial<FormData>) => {
    setFormData(prev => ({
      ...prev,
      ...updates
    } as FormData));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ ...originalData });
  }, [originalData]);

  const isFormDirty = useMemo(() => {
    return Object.keys(formData).some(key => formData[key] !== originalData[key]);
  }, [formData, originalData]);

  const hasChanges = useCallback((fieldName?: string) => {
    if (fieldName) {
      return formData[fieldName] !== originalData[fieldName];
    }
    return isFormDirty;
  }, [formData, originalData, isFormDirty]);

  const getFieldValue = useCallback((name: string) => {
    return formData[name] || '';
  }, [formData]);

  return {
    formData,
    updateField,
    updateMultipleFields,
    resetForm,
    isFormDirty,
    hasChanges,
    getFieldValue
  };
};

/**
 * Hook for RSVP form specific state management
 */
export const useRSVPFormState = () => {
  const initialRSVPData: FormData = {
    [FORM_FIELDS.RSVP.NAME]: '',
    [FORM_FIELDS.RSVP.EMAIL]: '',
    [FORM_FIELDS.RSVP.PHONE]: '',
    [FORM_FIELDS.RSVP.GUESTS]: '1',
    [FORM_FIELDS.RSVP.DIETARY]: 'none',
    [FORM_FIELDS.RSVP.MESSAGE]: ''
  };

  return useFormState(initialRSVPData);
};
