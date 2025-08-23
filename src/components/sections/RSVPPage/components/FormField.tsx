import { TextField, FormControl, Select, MenuItem } from '@mui/material';

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
}) => {

  if (type === 'select') {
    return (
      <FormControl fullWidth required={required} >
        <Select
          name={name}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ dir: 'rtl' }}
          
        >
          {options.map((option) => (
            <MenuItem 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
              
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  if (type === 'textarea') {
    return (
      <TextField
        fullWidth={fullWidth}
        name={name}
        value={value}
        onChange={onChange}
        multiline
        rows={rows}
        label={label}
        inputProps={{ dir: 'rtl' }}
        
      />
    );
  }

  return (
    <TextField
      fullWidth={fullWidth}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      required={required}
      inputProps={{ dir: 'rtl' }}
      
    />
  );
};

export default FormField;
