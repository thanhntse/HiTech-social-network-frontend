import {
  Box,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../../../components/button';

type Props = {}

export default function ForgotPassword({}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
            <Typography className="text-3xl font-semibold">
              {t('resetPassword')}
            </Typography>
          </Box>
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
