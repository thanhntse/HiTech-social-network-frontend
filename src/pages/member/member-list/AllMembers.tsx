import {
  Box,
  Typography,
} from '@mui/material'
import RenderIf from '../../../components/RenderIf'
import { useTranslation } from 'react-i18next';
import friendList from '../../../constant/demo-friend-list';
import { useState } from 'react';
import Pagination from '../../../components/pagination';
import MemberCard from './MemberCard';
import { SearchX } from 'lucide-react';

type Props = {}

export default function AllMembers({ }: Props) {
  const { t } = useTranslation();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(friendList.length / itemsPerPage);

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = friendList.slice(startIndex, endIndex);

  return (
    <>
      <RenderIf
        ifTrue={currentItems.length > 0}
      >
        <Box
          className='w-full flex flex-col'
        >
          <Box
            className='w-full flex flex-col justify-center items-start gap-8'
          >
            {currentItems.map((user, index) => (
              <MemberCard
                key={index}
                avatar={user.avatar}
                fullName={user.fullName}
                address={user.address}
              />
            ))}
          </Box>
          <RenderIf
            ifTrue={friendList.length > itemsPerPage}
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
            {t('noMemberFound')}
          </Typography>
        </Box>
      </RenderIf>
    </>
  )
}
