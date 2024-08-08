import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './index';
import { Box } from '@mui/material';

const CustomButton: React.FC<ButtonProps> = ({
  variant = 'contained',
  type = 'button',
  size = 'medium',
  fullWidth = false,
  fullRounded = false,
  className,
  disabled = false,
  loading = false,
  icon,
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      size={size}
      fullWidth={fullWidth}
      startIcon={icon}
      className={`${ (disabled || loading)? " bg-opacity-70 pointer-events-none " : " "} + ${className} + ${fullRounded ? " rounded-full " : ""}`}
      onClick={onClick}
      sx={{
        textTransform: 'none'
      }}
      {...rest}
    >
      {loading ?
        <Box
          className={`text-inherit flex justify-center items-center ${size === 'large' ? "h-[26.25px]" : size === 'medium' ? "h-[24.5px]" : "h-[22.75px]"}`}
        >
          <CircularProgress
            size={size === 'large' ? 20: size === 'medium' ? 18 : 16}
            color='inherit'
          />
        </Box>
      : children}
    </Button>
  );
};

export default CustomButton;
