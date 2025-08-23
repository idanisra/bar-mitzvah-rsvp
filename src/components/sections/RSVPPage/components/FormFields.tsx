import { Grid } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import FormField from './FormField';

const FormFields = ({ formData, handleChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const fields = [
    {
      name: 'name',
      label: 'שם מלא',
      type: 'text',
      required: true,
      fullWidth: true,
      gridProps: { xs: 12 }
    },
    {
      name: 'phone',
      label: 'מספר טלפון',
      type: 'tel',
      required: true,
      gridProps: { xs: 12, sm: 6, md: 3 }
    },
    {
      name: 'email',
      label: 'דואר אלקטרוני',
      type: 'email',
      required: false,
      gridProps: { xs: 12, sm: 6, md: 3 }
    },
    {
      name: 'attending',
      label: 'האם תשתתף?',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'בחר אפשרות', disabled: true },
        { value: 'yes', label: 'כן, אשתתף' },
        { value: 'no', label: 'לא, לא אוכל להשתתף' },
        { value: 'maybe', label: 'אולי' }
      ],
      gridProps: { xs: 12, sm: 6, md: 3 }
    },
    {
      name: 'numberOfGuests',
      label: 'מספר אורחים',
      type: 'text',
      required: false,
      gridProps: { xs: 12, sm: 6, md: 3 }
    },
    {
      name: 'message',
      label: 'הודעה אישית',
      type: 'textarea',
      required: false,
      fullWidth: true,
      rows: isMobile ? 4 : 6,
      gridProps: { xs: 12 }
    }
  ];

  return (
    <Grid container spacing={3} >
      {fields.map((field) => (
        <Grid item {...field.gridProps} key={field.name}>
          <FormField
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FormFields;
