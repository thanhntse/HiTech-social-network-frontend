import {
  Box,
  Typography,
} from '@mui/material'
import ActiveUserCard from './ActiveUserCard'
import { useTranslation } from 'react-i18next'
import activeUsers from '../../../constant/demo-active-user'
import { useState } from 'react'
import Pagination from '../../../components/pagination'
import RenderIf from '../../../components/RenderIf'

type Props = {}

export default function ActiveUserList({ }: Props) {
  const { t } = useTranslation();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(activeUsers.length / itemsPerPage);

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = activeUsers.slice(startIndex, endIndex);

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
            {t('activeFriend')}
          </Typography>
        </Box>

        <RenderIf
          ifTrue={currentItems.length > 0}
        >
          <>
            <Box
              className='w-full flex flex-col justify-center items-start gap-2'
            >
              {currentItems.map((user) => (
                <ActiveUserCard
                  key={user.id}
                  avatar={user.avatar}
                  fullName={user.fullName}
                />
              ))}
            </Box>
            <RenderIf
              ifTrue={activeUsers.length > itemsPerPage}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
              />
            </RenderIf>
          </>
        </RenderIf>

        <RenderIf
          ifTrue={currentItems.length === 0}
        >
          <hr className='mt-2 mb-5 opacity-10 w-full' />
          <Typography
            className='w-full text-txt-primary-light dark:text-txt-primary-dark'
          >
            {t('thereAreNoRecentlyActiveFriend')}
          </Typography>
        </RenderIf>

      </Box>
    </>
  )
}
