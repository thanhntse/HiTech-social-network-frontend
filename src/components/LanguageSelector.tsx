import React, { useState, useEffect } from 'react';
import us from '/images/US.svg';
import vn from '/images/VN.svg';
import { useTranslation } from 'react-i18next';
import { Box, IconButton } from '@mui/material';

interface LanguageSelectorProps {
}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState<string>();

  const toggleLanguage = () => {
    const currentLang = lang === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(currentLang);
    localStorage.setItem('lang', currentLang);
    setLang(currentLang);
  };

  useEffect(() => {
    const curLang = localStorage.getItem('lang');
    if (curLang) {
      setLang(curLang);
    } else {
      setLang("us");
    }
  }, []);

  return (
    <Box
      className='flex gap-2'
    >
      <IconButton
        color='inherit'
        className='hover:bg-primary-light dark:hover:bg-bg-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-all duration-300 ease-in-out hover:scale-110'
        onClick={toggleLanguage}
      >
        {
          lang ?
          <img
            src={lang === 'vi' ? vn : us}
            alt="language"
            className='w-6 h-auto rounded-full'
          />
          :
          <div className='w-6 h-auto'></div>
        }
      </IconButton>
    </Box>
  );
};

export default LanguageSelector;
