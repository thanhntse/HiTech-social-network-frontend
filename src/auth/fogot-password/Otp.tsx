import React from 'react'
import Button from '../../components/button'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type Props = {}

export default function Otp({}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {/* <InputText
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
      /> */}

      <Button
        fullWidth
        size='large'
        onClick={
          () => navigate('/auth/login')
        }
        // loading
        // variant='outlined'
      >
        {t('confirm')}
      </Button>
    </>
  )
}
