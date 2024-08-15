import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Tab,
  Typography
} from '@mui/material'
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab'
import {
  Search,
} from 'lucide-react'
import { useTranslation } from 'react-i18next';
import React from 'react';
import Dropdown from '../../../components/dropdown/dropdown';
import filterFriendsOptions from '../../../constant/filter-friends';
import MyFriends from './MyFriends';
import AllMembers from './AllMembers';

type Props = {}

export default function MemberList({ }: Props) {
  const { t } = useTranslation();

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
              placeholder={t('searchMember')}
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

        <Box
          className='w-full flex flex-col justify-center items-start bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8'
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}
              className='flex justify-between items-center pb-5 w-full'
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    display: 'none'
                  },
                }}
              >
                <Tab
                  label={t('allMembers')}
                  value="1"
                  className={`text-base rounded-md capitalize text-inherit ${value === '1' ? 'text-primary' : ""} hover:text-primary transition-all duration-200 ease-in-out relative`}
                  sx={{
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: "5px",
                      left: '50%',
                      transform: 'translateX(-50%)',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'all 200ms ease-in-out',
                      width: 0
                    },
                    '&:hover:after': {
                      width: '60%',
                    },
                    '&.Mui-selected:after': {
                      width: '60%',
                    }
                  }}
                />
                <Tab
                  label={t('myFriends')}
                  value="2"
                  className={`text-base rounded-md capitalize text-inherit ${value === '2' ? ' text-primary ' : ""} hover:text-primary transition-all duration-200 ease-in-out relative`}
                  sx={{
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: "5px",
                      left: '50%',
                      transform: 'translateX(-50%)',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'all 200ms ease-in-out',
                      width: 0
                    },
                    '&:hover:after': {
                      width: '60%',
                    },
                    '&.Mui-selected:after': {
                      width: '60%',
                    }
                  }}
                />
              </TabList>
              <Box
                className='basis-1/2 flex justify-end items-center gap-3'
              >
                <Typography>
                  {t('showBy')}:
                </Typography>
                <Dropdown options={filterFriendsOptions} />
              </Box>
            </Box>
            <TabPanel
              value="1"
              className='w-full p-0 pt-5'
            >
              <AllMembers />
            </TabPanel>
            <TabPanel
              value="2"
              className='w-full p-0 pt-5'
            >
              <MyFriends />
            </TabPanel>
          </TabContext>
        </Box>

      </Box>
    </>
  )
}
