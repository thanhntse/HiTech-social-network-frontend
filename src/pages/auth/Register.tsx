import {
  Box,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import InputText from '../../components/input-text';
import Password from '../../components/password';
import {
  Mail,
  User
} from 'lucide-react';
import Button from '../../components/button';

type Props = {}

type RegisterProps = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
}

type RegisterErrorProps = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
}

export default function Register({ }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState<RegisterProps>();
  const [registerFormError, setRegisterFormError] = useState<RegisterErrorProps>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm((prevForm) => {
      const newForm = prevForm
        || {
          emailAddress: "",
          firstName: "",
          lastName: "",
          password: ""
      };

      return {
        ...newForm,
        [name]: value,
      };
    });
  };

  const validateForm = () => {
    const errors = {
      emailAddress: "",
      firstName: "",
      lastName: "",
      password: ""
    };

    if (!registerForm?.emailAddress) {
      errors.emailAddress = 'Email address is required.';
    }

    if (!registerForm?.password) {
      errors.password = 'Password is required.';
    }

    setRegisterFormError(errors);
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
          <Box
            className="flex items-center justify-center gap-5 w-full"
          >
            <InputText
              type='text'
              id='firstName'
              name='firstName'
              label={t('firstName')}
              placeholder={t('enterYourFirstName')}
              value={registerForm?.firstName || ""}
              onchange={handleInputChange}
              error={!!registerFormError?.firstName}
              errorMsg={registerFormError?.firstName}
              icon={<User />}
            />

            <InputText
              type='text'
              id='lastName'
              name='lastName'
              label={t('lastName')}
              placeholder={t('enterYourLastName')}
              value={registerForm?.lastName || ""}
              onchange={handleInputChange}
              error={!!registerFormError?.lastName}
              errorMsg={registerFormError?.lastName}
              icon={<User />}
            />
          </Box>

          <InputText
            type='text'
            id='emailAddress'
            name='emailAddress'
            label={t('emailAddress')}
            placeholder={t('enterYourEmailAddress')}
            value={registerForm?.emailAddress || ""}
            onchange={handleInputChange}
            error={!!registerFormError?.emailAddress}
            errorMsg={registerFormError?.emailAddress}
            icon={<Mail />}
          />

          <Password
            id='password'
            name='password'
            label={t('password')}
            placeholder={t('enterYourPassword')}
            value={registerForm?.password || ""}
            onchange={handleInputChange}
            error={!!registerFormError?.password}
            errorMsg={registerFormError?.password}
            evaluate
          />

          <Button
            fullWidth
            size='large'
            // loading
            // variant='outlined'
          >
            {t('signUp')}
          </Button>
        </Box>

        <Box
          className="flex justify-center items-center gap-1.5"
        >
          <Typography
            className='font-medium'
          >
            {t('alreadyHaveAnAccount')}
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
};
