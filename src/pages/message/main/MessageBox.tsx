import {
  Box,
  Typography
} from '@mui/material'
import {
  MessagesSquare
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Props = {}

export default function MessageBox({ }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className='w-full bg-white dark:bg-bg-secondary-dark rounded-md'
      >
        <Box
          className='w-full text-txt-primary-light dark:text-txt-primary-dark flex flex-col items-center justify-center gap-5 min-h-[500px]'
        >
          <MessagesSquare
            className='w-14 h-14'
            strokeWidth={1.5}
          />
          <Typography
            className='font-medium'
          >
            {t('writeAMessageToStartTheConversation')}
          </Typography>
        </Box>

      </Box>
    </>
  )
}
