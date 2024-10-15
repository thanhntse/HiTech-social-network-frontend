import { useState } from 'react'
import Button from '../../../components/button'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Password from '../../../components/password';
import PinCode from '../../../components/PinCode';
import SpinnerLoading from '../../../components/SpinnerLoading';

type Props = {}

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

export default function Otp({}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
    <>
      <div className="text-sm text-center text-txt-primary-light dark:text-txt-primary-dark">
        <div>
          {t('weSent')}<span className="font-semibold text-gray-800 dark:text-white">hitech@example.com</span>
        </div>
        <div>
          {t('enterDigit')}
        </div>
      </div>

      <PinCode
        value={resetPasswordForm?.otp || ""}
        onChange={handleInputChange}
      />

      <Password
        id='newPassword'
        name='newPassword'
        label={t('newPassword')}
        placeholder={t('enterYourNewPassword')}
        value={resetPasswordForm?.newPassword || ""}
        onchange={handleInputChange}
        error={!!resetPasswordFormError?.newPassword}
        errorMsg={resetPasswordFormError?.newPassword}
        evaluate
      />

      <Password
        id='confirmPassword'
        name='confirmPassword'
        label={t('confirmPassword')}
        placeholder={t('enterYourConfirmPassword')}
        value={resetPasswordForm?.confirmPassword || ""}
        onchange={handleInputChange}
        error={!!resetPasswordFormError?.confirmPassword}
        errorMsg={resetPasswordFormError?.confirmPassword}
      />

      <div className='text-sm text-center justify-center text-txt-primary-light dark:text-txt-primary-dark'>
        {t('haventReceivedEmailYet')}
        {
            false
            ?
            <SpinnerLoading
              type='button'
              height='20'
              width='20'
              color='#000'
            />
            :
            <div className={false ? `font-semibold text-red-500` : `font-semibold text-gray-800 cursor-pointer hover:text-primary`}>
              {
                false
                ?
                <>2:59</>
                :
                <Button
                  variant='text'
                  size='small'
                  className='-my-2'
                >
                  {t('resend')}
                </Button>
              }
            </div>
        }
      </div>

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
