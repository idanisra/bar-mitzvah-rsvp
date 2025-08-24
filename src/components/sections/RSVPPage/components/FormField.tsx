import { TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
  required: boolean;
  fullWidth: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  options?: string[];
  rows?: number;
}

const FormField = ({
  name,
  label,
  type,
  required,
  fullWidth,
  value,
  onChange,
  options,
  rows
}: FormFieldProps) => {
  if (type === 'select' && options) {
    return (
      <FormControl fullWidth={fullWidth} required={required}>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          label={label}
          onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <TextField
      name={name}
      label={label}
      type={type}
      required={required}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      multiline={type === 'textarea'}
      rows={rows}
      variant="outlined"
    />
  );
};

export default FormField;
