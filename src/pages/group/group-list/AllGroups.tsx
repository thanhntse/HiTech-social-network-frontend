import {
  Box,
  Typography,
} from '@mui/material'
import RenderIf from '../../../components/RenderIf'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Pagination from '../../../components/pagination';
import { SearchX } from 'lucide-react';
import groupList from '../../../constants/demo-group-list';
import GroupCard from './GroupCard';

type Props = {}

export default function AllGroups({ }: Props) {
  const { t } = useTranslation();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = groupList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = groupList.slice(startIndex, endIndex);

  return (
    <>
      <RenderIf
        ifTrue={currentItems.length > 0}
      >
        <Box
          className='w-full flex flex-col'
        >
          <Box
            className='w-full text-xs text-txt-primary-light dark:text-txt-primary-dark font-medium text-right mb-2'
          >
            {startIndex + 1} - {endIndex > totalItems ? totalItems : endIndex} {t('of')} {totalItems}
          </Box>
          <Box
            className='w-full grid grid-cols-2 gap-8'
          >
            {currentItems.map((group, index) => (
              <GroupCard
                key={index}
                avatar={group.avatar}
                background={group.background}
                memberAvatarList={group.memberAvatarList}
                memberCount={group.memberCount}
                postCount={group.postCount}
                name={group.name}
              />
            ))}
          </Box>
          <RenderIf
            ifTrue={totalItems > itemsPerPage}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </RenderIf>
        </Box>
      </RenderIf>

      <RenderIf
        ifTrue={currentItems.length === 0}
      >
        <Box
          className='flex gap-4 h-[300px] justify-center items-center'
        >
          <SearchX
            className='w-10 h-10'
          />
          <Typography
            className='text-3xl font-medium italic'
          >
            {t('noGroupFound')}
          </Typography>
        </Box>
      </RenderIf>
    </>
  )
}
