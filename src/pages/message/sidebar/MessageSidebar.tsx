import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography
} from '@mui/material'
import MessageSidebarTab from './MessageSidebarTab'
import {
  Search,
  Settings,
  SquarePen
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Props = {}

export default function MessageSidebar({ }: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Box
        className='w-full flex flex-col gap-4'
      >
        <Box
          className='w-full flex justify-between items-center gap-2.5 bg-white dark:bg-bg-secondary-dark rounded-md p-3 max-h-16'
        >
          <FormControl
            className='w-full'
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-search3"
              type='text'
              placeholder={t('search')}
              className='bg-bg-primary-light dark:bg-bg-primary-dark text-sm font-medium text-txt-primary-light dark:text-txt-primary-dark border border-gray-200 dark:border-bg-secondary-dark'
              startAdornment={
                <InputAdornment position="start">
                  <Search className='text-txt-primary-light dark:text-txt-primary-dark' size={18} />
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
                  padding: '10px 12px',
                },
              }}
            />
          </FormControl>
          <IconButton
            className='rounded-md bg-primary text-white w-10 h-10'
          >
            <SquarePen
              className='w-5 h-5'
            />
          </IconButton>
        </Box>

        <MessageSidebarTab />

        <Box
          className='w-full flex justify-between items-center bg-white dark:bg-bg-secondary-dark rounded-md p-3'
        >
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
              className="w-9 h-9"
            />
            <Typography
              className='font-medium text-txt-primary-light dark:text-txt-primary-dark'
            >
              Thanh Nguyen
            </Typography>
          </div>
          <IconButton
            className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
          >
            <Settings
              className='w-5 h-5'
            />
          </IconButton>
        </Box>

      </Box>
    </>
  )
}
