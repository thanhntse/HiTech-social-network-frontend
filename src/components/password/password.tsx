import React, { useState } from 'react';
import { PasswordStrengthProps, PasswordProps } from './index'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password, evaluate }) => {
  const calculateScore = (password: string | undefined) => {
    let score = 0;
    if (!password) return score;

    if (password.length >= 8) score += 1;

    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharacters.test(password)) score += 1;

    const uppercaseCharacters = /[A-Z]/;
    if (uppercaseCharacters.test(password)) score += 1;

    const lowercaseCharacters = /[a-z]/;
    if (lowercaseCharacters.test(password)) score += 1;

    const numbers = /[0-9]/;
    if (numbers.test(password)) score += 1;

    return score;
  };

  const score = calculateScore(password);
  const scoreParseBg: { [key: number]: string } = {
    1: 'w-1/4 bg-red-600',
    2: 'w-2/4 bg-orange-500',
    3: 'w-3/4 bg-yellow-400',
    4: 'bg-green-500',
    5: 'bg-green-500',
    6: 'bg-green-500',
  }

  return (
    evaluate && <div className="relative px-1 w-full -mt-1">
      <div className={`h-1 rounded-full transition-all ease-in-out duration-300 ${scoreParseBg[score]}`} />
      <div className={`absolute pl-1.5 py-1 -top-10 right-2 bg-white z-10 font-normal text-gray-500 text-sm`}>
        {
          score >= 4 ? 'Very Strong' :
            score >= 3 ? 'Strong' :
              score >= 2 ? 'Average' :
                score >= 1 ? 'Weak' : ''
        }
      </div>
    </div>
  );
};

const Password: React.FC<PasswordProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={props.id} className="text-gray-800 dark:text-white font-bold">
        {props.label}
      </label>
      <TextField
        name={props.name}
        type={showPassword ? "text" : "password"}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onchange}
        value={props.value}
        disabled={props.disabled}
        error={props.error}
        helperText={props.error && props.errorMsg}
        variant="outlined"
        fullWidth
        InputProps={{
          className: 'rounded-md bg-gray-100 dark:bg-bg-secondary-dark shadow-md border border-transparent',
          classes: {
            notchedOutline: props.error ? 'border-red-500 dark:border-red-600' : 'border-inherit',
            focused: 'border-primary dark:border-primary-dark',
            input: 'py-3.5 font-medium text-gray-800 dark:text-white',
          },
          startAdornment: (

              <InputAdornment position="start">
                <IconButton edge="start" disabled className='text-gray-800 dark:text-white'>

                  {props.error ? (<ErrorIcon className="text-red-500" />) : <LockKeyhole /> }

                </IconButton>
              </InputAdornment>
          ),
          endAdornment: (

            <InputAdornment position="end">
              <IconButton
                edge="end"
                className='text-gray-800 dark:text-white'
                onClick={toggleShowPassword}
              >

                { showPassword ?  <EyeOff/> : <Eye/> }

              </IconButton>
            </InputAdornment>
        ),
        }}
        FormHelperTextProps={{
          className: 'text-red-500 text-xs font-semibold mt-1',
        }}
        className={`${props.error ? 'animate-shake' : ''}`}
      />
    </div>
  );
};

export default Password;
