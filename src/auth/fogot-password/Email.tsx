import { useState } from 'react'
import InputText from '../../components/input-text'
import Button from '../../components/button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import {
  Mail
} from 'lucide-react'

type Props = {}

type EmailProps = {
  emailAddress: string;
}

type EmailErrorProps = {
  emailAddress: string;
}

export default function Email({}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [emailForm, setEmailForm] = useState<EmailProps>();
  const [emailFormError, setEmailFormError] = useState<EmailErrorProps>();

  const validateEmail = () => {
    const errors = { emailAddress: ""};

    if (!emailForm?.emailAddress) {
      errors.emailAddress = 'Email address is required.';
    }

    setEmailFormError(errors);
  };

  return (
    <>
      <InputText
        type='text'
        id='emailAddress'
        name='emailAddress'
        label={t('emailAddress')}
        placeholder={t('enterYourEmailAddress')}
        value={emailForm?.emailAddress || ""}
        onchange={
          (e) => {
            setEmailForm(
              {emailAddress: e.target.value}
            );
          }
        }
        error={!!emailFormError?.emailAddress}
        errorMsg={emailFormError?.emailAddress}
        icon={<Mail />}
      />

      <Button
        fullWidth
        size='large'
        onClick={
          () => navigate('/auth/forgotPassword/otp')
        }
        // loading
        // variant='outlined'
      >
        {t('sendOtpCode')}
      </Button>
    </>
  )
}
