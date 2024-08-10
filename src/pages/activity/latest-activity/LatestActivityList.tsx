import {
  Box,
  Typography
} from '@mui/material'
import LatestActivityCard from './LatestActivityCard'
import activeUsers from '../../../constant/demo-active-user'
import { useTranslation } from 'react-i18next'

type Props = {}

export default function LatestActivityList({}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-start bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8'
      >
        <Box
          className='w-full mb-3'
        >
          <Typography
            className='text-xl w-full font-medium'
          >
            {t('latestActivities')}
          </Typography>
        </Box>
        {
          activeUsers.length
            ?
            <Box
              className='w-full flex flex-col justify-center items-start gap-2'
            >
              {activeUsers.map((user) => (
                <LatestActivityCard
                  key={user.id}
                  avatar={user.avatar}
                  fullName={user.fullName}
                />
              ))}
            </Box>
            :
            <Typography
              className='w-full text-txt-primary-light dark:text-txt-primary-dark'
            >
              <hr className='mt-2 mb-5 opacity-10' />
              {t('thereAreNoLatestActivities')}
            </Typography>
        }
      </Box>
    </>
  )
}
