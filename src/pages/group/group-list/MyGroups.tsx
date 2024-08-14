import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography
} from '@mui/material'
import RenderIf from '../../../components/RenderIf'
import {
  Search,
  SearchX
} from 'lucide-react'
import { useTranslation } from 'react-i18next';
import friendList from '../../../constant/demo-friend-list';
import { useState } from 'react';
import Pagination from '../../../components/pagination';
import Dropdown from '../../../components/dropdown/dropdown';
import filterFriendsOptions from '../../../constant/filter-friends';
import GroupCard from './GroupCard';

type Props = {}

export default function MyGroups({ }: Props) {
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
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >

        <Box
          className='w-full flex flex-col justify-center items-start bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8'
        >
          <FormControl
            className='w-full'
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-search2"
              type='text'
              placeholder={t('searchGroup')}
              className='bg-bg-primary-light dark:bg-bg-primary-dark font-medium text-txt-primary-light dark:text-txt-primary-dark border border-gray-200 dark:border-bg-secondary-dark'
              startAdornment={
                <InputAdornment position="start">
                  <Search className='text-txt-primary-light dark:text-txt-primary-dark' size={24} />
                </InputAdornment>
              }
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'inherit',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'inherit',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2a5aa6',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '12px 12px',
                },
              }}
            />
          </FormControl>
        </Box>
        <RenderIf
          ifTrue={currentItems.length > 0}
        >
          <Box
            className='w-full flex flex-col justify-center items-start bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8'
          >
            <Box
              className='w-full mb-3 flex justify-between items-center'
            >
              <Typography
                className='text-xl w-full font-medium basis-1/3'
              >
                {t('myFriends')}
              </Typography>
              <Box
                className='basis-2/3 flex justify-end items-center gap-3'
              >
                <Typography
                  className='text-lg'
                >
                  {t('showBy')}:
                </Typography>
                <Dropdown options={filterFriendsOptions} />
              </Box>

            </Box>

            <hr className='w-full opacity-10 mb-5' />

            <Box
              className='w-full flex flex-col justify-center items-start gap-8'
            >
              {currentItems.map((user, index) => (
                <GroupCard
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
              {t('noGroupFound')}
            </Typography>
          </Box>
        </RenderIf>
      </Box>
    </>
  )
}
