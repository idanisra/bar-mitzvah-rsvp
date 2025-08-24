import { Grid } from '@mui/material';
import FormField from './FormField';

interface FormData {
  [key: string]: string;
}

interface FormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormFields = ({ formData, handleChange }: FormFieldsProps) => {
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
          <FormField
            name={field.name}
            label={field.label}
            type={field.type}
            required={field.required}
            fullWidth={field.fullWidth}
            value={formData[field.name] || ''}
            onChange={handleChange}
            options={field.options}
            rows={field.rows}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FormFields;
