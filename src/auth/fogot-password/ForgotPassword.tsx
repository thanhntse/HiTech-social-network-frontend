import {
  Box,
  Typography
} from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/button';

type Props = {}

type EmailProps = {
  emailAddress: string;
}

type EmailErrorProps = {
  emailAddress: string;
}

type ResetPasswordProps = {
  otp: string;
  newPassword: string;
  confirmPassword: string
}

type ResetPasswordErrorProps = {
  otp: string;
  newPassword: string;
  confirmPassword: string
}

export default function ForgotPassword({}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState<EmailProps>();
  const [emailError, setEmailError] = useState<EmailErrorProps>();
  const [resetPasswordForm, setResetPasswordForm] = useState<ResetPasswordProps>();
  const [resetPasswordFormError, setResetPasswordFormError] = useState<ResetPasswordErrorProps>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResetPasswordForm((prevForm) => {
      const newForm = prevForm || { otp: '', newPassword: '', confirmPassword: '' };

      return {
        ...newForm,
        [name]: value,
      };
    });
  };

  const validateForm = () => {
    const errors = { otp: '', newPassword: '', confirmPassword: '' };

    if (!resetPasswordForm?.otp) {
      errors.otp = 'Otp is required.';
    }

    if (!resetPasswordForm?.newPassword) {
      errors.newPassword = 'New password is required.';
    }

    if (!resetPasswordForm?.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required.';
    }

    setResetPasswordFormError(errors);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 animate-fade-in-slow">
      <Box
        className="flex flex-col gap-10 w-full"
      >
        <Box
          className="flex flex-col gap-5 justify-center items-center"
        >
          <Box
            className="flex gap-3 items-center"
          >
            <img src="/favicon.svg"
              alt="logo"
              className="w-10 h-10"
            />
            <Typography className="text-3xl font-semibold">
              HiTech
            </Typography>
          </Box>
          <Typography className="text-txt-primary-light dark:text-txt-primary-dark max-w-sm text-center">
            {t('authWelcome')}
          </Typography>
        </Box>

        <Box
          className="flex flex-col items-center justify-center gap-5 w-2/3 mx-auto"
        >
          <Outlet />
        </Box>

        <Box
          className="flex justify-center items-center gap-1.5"
        >
          <Typography
            className='font-medium'
          >
            {t('backToSignIn')}
          </Typography>
          <Button
            variant='text'
            className='text-base'
            onClick={
              () => navigate('/auth/login')
            }
          >
            {t('signIn')}
          </Button>
        </Box>

      </Box>
    </div>
  );
}
