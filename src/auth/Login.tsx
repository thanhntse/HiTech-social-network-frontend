import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Login = ({ }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <Box
        className="flex flex-col gap-10"
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
          className="flex justify-center"
        >
          <Button
            onClick={() => navigate('/')}
          >
            Let's go
          </Button>
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
