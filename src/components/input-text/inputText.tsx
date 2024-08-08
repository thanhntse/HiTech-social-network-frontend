import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { InputTextProps } from './index';
import ErrorIcon from '@mui/icons-material/Error';

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  name,
  placeholder,
  onchange,
  value,
  disabled,
  type = 'text',
  error,
  errorMsg,
  icon,
}) => {
  const [formattedValue, setFormattedValue] = useState(value);

  useEffect(() => {
    setFormattedValue(value);
  }, [value]);

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    let formattedValue = value;

    if (type === 'number') {
      const numericValue = value.replace(/[^0-9]/g, '');
      formattedValue = formatNumber(numericValue);
    }
    await new Promise<void>((resolve) => {
      setFormattedValue(formattedValue);
      resolve();
    });

    onchange(event);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-gray-800 dark:text-white font-bold">
        {label}
      </label>
      <TextField
        type={type === 'number' ? 'text' : type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={formattedValue}
        disabled={disabled}
        error={error}
        helperText={error && errorMsg}
        variant="outlined"
        fullWidth
        InputProps={{
          className: 'rounded-md bg-gray-100 dark:bg-bg-secondary-dark shadow-md border border-transparent',
          classes: {
            notchedOutline: error ? 'border-red-500 dark:border-red-600' : 'border-inherit',
            focused: '!border-primary dark:border-primary-dark',
            input: 'py-3.5 font-medium text-gray-800 dark:text-white',
          },
          startAdornment: (

              <InputAdornment position="start">
                <IconButton edge="start" disabled className='text-gray-800 dark:text-white'>

                  {error ? (<ErrorIcon className="text-red-500" />) : icon }

                </IconButton>
              </InputAdornment>
          ),
        }}
        FormHelperTextProps={{
          className: 'text-red-500 text-xs font-semibold mt-1',
        }}
        className={`${error ? 'animate-shake' : ''}`}
      />
    </div>
  );
};

export default InputText;
