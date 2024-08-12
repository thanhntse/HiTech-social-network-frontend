import {
  Box,
  Typography
} from '@mui/material'
import { Bug } from 'lucide-react'
import React from 'react'
import Button from '../../../components/button'
import { useTranslation } from 'react-i18next'

type Props = {}

export default function ContactUs({ }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className='w-full flex flex-col items-center bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8 h-[480px] bg-[url(/images/contact-us-img.jpg)] bg-cover bg-center'
      >
        <Box className={`mt-5 flex gap-3 items-center justify-center`}
        >
          <Bug
            className='w-10 h-10 text-white'
          />

          <Typography className="text-3xl font-semibold text-white">
            HiTech
          </Typography>
        </Box>
        <Typography className="font-medium text-white mt-8 mb-4 text-center">
            {t('feelFreeToReachUsAnytime')} <br/> {t('weAreAvaliable24Hours')}
        </Typography>
        <Button
          size='large'
          className='uppercase tracking-wider bg-white hover:bg-primary-light hover:text-primary text-gray-800 font-semibold'
          onClick={
            () => window.open("https://facebook.com/nguyenthai.thanh07", '_blank')
          }
        >
          {t('contactMe')}
        </Button>
      </Box>
    </>
  )
}
