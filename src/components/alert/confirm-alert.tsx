import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ConfirmOptions } from './index';
import x from '../../assets/images/x.svg';
import './index.css';
import Button from '../button';
import { useTranslation } from 'react-i18next';
import {
  Error,
  Info,
  Success,
  Warning
} from '../../assets/images/SVGIcon';

const CustomConfirmDialog = ({ options, onClose, }) => {
  const { t } = useTranslation();
  const notify = {
    info: Info,
    warning: Warning,
    error: Error,
    success: Success
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const alertType = document.getElementById('alert-type');
    if (alertType) {
      alertType.classList.add("animate-shake");
      setTimeout(() => {
        alertType.classList.remove("animate-shake")
      }, 500);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={`relative w-fit p-5 text-gray-800 rounded-xl shadow-2xl bg-white max-h-screen overflow-y-auto overflow-x-hidden`}>
      <button className='absolute p-2 top-1.5 right-1.5 hover:bg-gray-200 rounded-full transition-all duration-300 ease-in-out'
        onClick={onClose}
      >
        <img src={x} alt="x" />
      </button>

      <div
        id='alert-type'
        className='w-full flex justify-center items-center mb-2'>
        {notify[options.type]}
      </div>

      <h1 className='text-2xl text-center font-semibold mb-2'>
        {options.title}
      </h1>

      <p className='text-gray-500 text-sm w-4/5 text-center mx-auto mb-2'>
        {options.message}
      </p>

      <div className='flex justify-between items-center gap-2'>
        <Button
          fullWidth
          label={t('confirm')}
          onClick={() => {
            options.onConfirmClick();
            onClose();
          }}
          size='small'
          className='text-white bg-primary-green hover:bg-teal-900'
        />
        <Button
          fullWidth
          label={t('cancel')}
          onClick={onClose}
          size='small'
          className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
        />
      </div>
    </div>
  );
}

const showAlert = (options: ConfirmOptions) => {
  confirmAlert({
    customUI: ({ onClose }) =>
      <CustomConfirmDialog
        options={options}
        onClose={onClose}
      />,
    overlayClassName: "custom-overlay",
  });
};

export default showAlert;
