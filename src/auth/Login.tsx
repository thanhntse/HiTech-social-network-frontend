import React, { useState } from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/input-text';
import { User } from 'lucide-react';
import Password from '../components/password';

type Props = {}

type LoginProps = {
  emailAddress: string;
  password: string
}

type LoginErrorProps = {
  emailAddress: string;
  password: string
}

const Login = ({ }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginProps>();
  const [loginFormError, setLoginFormError] = useState<LoginErrorProps>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevForm) => {
      const newForm = prevForm || { emailAddress: '', password: '' };

      return {
        ...newForm,
        [name]: value,
      };
    });
    validateForm();
  };

  const validateForm = () => {
    const errors = { emailAddress: '', password: '' };

    if (!loginForm?.emailAddress) {
      errors.emailAddress = 'Email address is required.';
    }

    if (!loginForm?.password) {
      errors.password = 'Password is required.';
    }

    setLoginFormError(errors);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
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
            <Typography className="text-3xl font-semibold text-gray-800 dark:text-white">
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
          <InputText
            type='text'
            id='emailAddress'
            name='emailAddress'
            label={t('emailAddress')}
            placeholder={t('enterYourEmailAddress')}
            value={loginForm?.emailAddress || ""}
            onchange={handleInputChange}
            error={!!loginFormError?.emailAddress}
            errorMsg={loginFormError?.emailAddress}
            icon={<User />}
          />

          <Password
            id='password'
            name='password'
            label={t('password')}
            placeholder={t('enterYourPassword')}
            value={loginForm?.password || ""}
            onchange={handleInputChange}
            error={!!loginFormError?.password}
            errorMsg={loginFormError?.password}
          />
        </Box>

        <Box
          className=""
        >

        </Box>

      </Box>
    </div>
  );
};

export default Login;
