import { useState, useCallback } from 'react';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface UseFormValidationReturn {
  errors: ValidationErrors;
  validateField: (name: string, value: string) => string | undefined;
  validateForm: (data: Record<string, string>) => boolean;
  clearErrors: () => void;
  setFieldError: (name: string, error: string) => void;
}

/**
 * Custom hook for form validation
 */
export const useFormValidation = (rules: ValidationRules): UseFormValidationReturn => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback((name: string, value: string): string | undefined => {
    const rule = rules[name];
    if (!rule) return undefined;

    // Required validation
    if (rule.required && (!value || value.trim() === '')) {
      return 'שדה זה הוא חובה';
    }

    // Skip other validations if value is empty and not required
    if (!value || value.trim() === '') return undefined;

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      return `מינימום ${rule.minLength} תווים`;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      return `מקסימום ${rule.maxLength} תווים`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return 'ערך לא תקין';
    }

    // Custom validation
    if (rule.custom) {
      return rule.custom(value);
    }

    return undefined;
  }, [rules]);

  const validateForm = useCallback((data: Record<string, string>): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    Object.keys(rules).forEach(fieldName => {
      const error = validateField(fieldName, data[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [rules, validateField]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const setFieldError = useCallback((name: string, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
    setFieldError
  };
};

// Predefined validation rules for common use cases
export const VALIDATION_RULES = {
  name: { required: true, minLength: 2, maxLength: 50 },
  email: { 
    required: true, 
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value: string) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'כתובת אימייל לא תקינה';
      }
      return undefined;
    }
  },
  phone: { 
    required: true, 
    pattern: /^[\d\s\-\+\(\)]+$/,
    custom: (value: string) => {
      const cleanValue = value.replace(/[\s\-\+\(\)]/g, '');
      if (cleanValue.length < 9) {
        return 'מספר טלפון חייב להכיל לפחות 9 ספרות';
      }
      return undefined;
    }
  },
  message: { maxLength: 500 }
} as const;
