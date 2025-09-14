import { Grid, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import MobileOptimizedInput from '../../../../../components/ui/forms/MobileOptimizedInput/MobileOptimizedInput';

interface FormData {
  [key: string]: string;
}

interface FormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (e: any) => void;
}

const FormFields = ({ formData, handleChange, handleSelectChange }: FormFieldsProps) => {
  const fields = [
    {
      name: 'name',
      label: 'שם מלא',
      type: 'text',
      required: true,
      fullWidth: true,
      gridProps: { xs: 12, sm: 6 }
    },
    {
      name: 'email',
      label: 'אימייל',
      type: 'email',
      required: true,
      fullWidth: true,
      gridProps: { xs: 12, sm: 6 }
    },
    {
      name: 'phone',
      label: 'מספר טלפון',
      type: 'tel',
      required: true,
      fullWidth: true,
      gridProps: { xs: 12, sm: 6 }
    },
    {
      name: 'guests',
      label: 'מספר אורחים',
      type: 'select',
      required: true,
      fullWidth: true,
      options: ['1', '2', '3', '4', '5+'],
      gridProps: { xs: 12, sm: 6 }
    },
    {
      name: 'dietary',
      label: 'הגבלות תזונתיות',
      type: 'select',
      required: false,
      fullWidth: true,
      options: ['אין', 'צמחוני', 'טבעוני', 'ללא גלוטן', 'ללא לקטוז', 'אחר'],
      gridProps: { xs: 12, sm: 6 }
    },
    {
      name: 'message',
      label: 'הודעה נוספת (אופציונלי)',
      type: 'textarea',
      required: false,
      fullWidth: true,
      rows: 3,
      gridProps: { xs: 12 }
    }
  ];

  return (
    <Grid container spacing={3}>
      {fields.map((field) => (
        <Grid item {...field.gridProps} key={field.name}>
          {field.type === 'select' ? (
            <FormControl 
              fullWidth 
              required={field.required}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  fontSize: '16px',
                  '&:hover': {
                    borderColor: '#1e3a8a',
                  },
                  '&.Mui-focused': {
                    borderColor: '#1e3a8a',
                    boxShadow: '0 0 0 2px rgba(30, 58, 138, 0.1)',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontSize: '16px',
                  '&.Mui-focused': {
                    color: '#1e3a8a',
                  }
                }
              }}
            >
              <InputLabel>{field.label}</InputLabel>
              <Select
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleSelectChange}
                label={field.label}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      borderRadius: 2,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.1)',
                    }
                  }
                }}
              >
                {field.options?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : field.type === 'textarea' ? (
            <TextField
              name={field.name}
              label={field.label}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              fullWidth
              multiline
              rows={field.rows || 3}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  fontSize: '16px',
                  '&:hover': {
                    borderColor: '#1e3a8a',
                  },
                  '&.Mui-focused': {
                    borderColor: '#1e3a8a',
                    boxShadow: '0 0 0 2px rgba(30, 58, 138, 0.1)',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontSize: '16px',
                  '&.Mui-focused': {
                    color: '#1e3a8a',
                  }
                }
              }}
            />
          ) : (
            <MobileOptimizedInput
              name={field.name}
              label={field.label}
              type={field.type as any}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              placeholder={field.label}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default FormFields;
