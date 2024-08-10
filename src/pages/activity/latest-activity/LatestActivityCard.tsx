import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import { MessageCircleMore } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Props = {
  avatar: string,
  fullName: string
}

export default function LatestActivityCard({ avatar, fullName }: Props) {
  const { t } = useTranslation();
  return (
    <>
      <hr className='w-full opacity-10' />

      <Box
        className='flex items-center gap-3'
      >
        <Avatar
          alt={`Avatar ${fullName}`}
          src={avatar}
          className="w-10 h-10"
        />

        <Box
          className='flex flex-col justify-center gap-1'
        >
          <Typography
            className='font-semibold'
          >
            <span
              className='hover:text-primary dark:hover:text-primary-dark transition-all ease-in-out duration-300 cursor-pointer'
            >
              {fullName}
            </span>
            <Typography
              className='ml-2 inline text-txt-primary-light dark:text-txt-primary-dark text-sm'
            >
              {t('hasMessagedYou')}
            </Typography>
          </Typography>

          <Typography
            className='inline text-txt-primary-light dark:text-txt-primary-dark text-xs'
          >
            1 hour ago
          </Typography>
        </Box>
      </Box>
    </>
  )
}
