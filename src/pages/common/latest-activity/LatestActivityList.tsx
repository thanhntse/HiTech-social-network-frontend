import {
  Box,
  Typography
} from '@mui/material'
import LatestActivityCard from './LatestActivityCard'
import { useTranslation } from 'react-i18next'
import latestActivities from '../../../constant/demo-latest-activity'
import { useState } from 'react'
import RenderIf from '../../../components/RenderIf'
import Pagination from '../../../components/pagination'

type Props = {}

export default function LatestActivityList({ }: Props) {
  const { t } = useTranslation();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(latestActivities.length / itemsPerPage);

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = latestActivities.slice(startIndex, endIndex);

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

        <RenderIf
          ifTrue={currentItems.length > 0}
        >
          <>
            <Box
              className='w-full flex flex-col justify-center items-start gap-2'
            >
              {currentItems.map((activity) => (
                <LatestActivityCard
                  key={activity.id}
                  avatar={activity.avatar}
                  fullName={activity.fullName}
                />
              ))}
            </Box>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </>
        </RenderIf>

        <RenderIf
          ifTrue={currentItems.length === 0}
        >
          <hr className='mt-2 mb-5 opacity-10 w-full' />
          <Typography
            className='w-full text-txt-primary-light dark:text-txt-primary-dark'
          >
            {t('thereAreNoLatestActivities')}
          </Typography>
        </RenderIf>

      </Box>
    </>
  )
}
