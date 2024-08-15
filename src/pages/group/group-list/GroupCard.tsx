import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import {
  CalendarDays,
  Ellipsis,
  MapPin,
  MessageCircleMore,
} from 'lucide-react'

type Props = {
  avatar: string,
  fullName: string,
  address: string
}

export default function GroupCard({
  avatar,
  fullName,
  address
}: Props) {
  return (
    <>
      <Box
        className='p-6 bg-gray-100 dark:bg-bg-primary-dark w-full rounded-md'
      >
        <Box
          className={`w-full flex justify-between items-start`}
        >
          <Box
            className={`flex gap-4 items-center`}
          >
            <Avatar
              alt={`Avatar ${fullName}`}
              src={avatar}
              className="w-20 h-20"
            />
            <Box
              className={`w-full`}
            >
              <Typography
                className='font-semibold text-xl hover:text-primary dark:hover:text-primary-dark transition-all ease-in-out duration-300 cursor-pointer'
              >
                {fullName}
              </Typography>
              <Typography
                className='text-sm font-medium text-txt-primary-light dark:text-txt-primary-dark mt-1 flex gap-5'
              >
                <span className='inline-flex items-center gap-1'>
                  <MapPin
                    strokeWidth={1.5}
                    className='w-4 h-4'
                  />
                  {address}
                </span>
                <span className='inline-flex items-center gap-1'>
                  <CalendarDays
                    strokeWidth={1.5}
                    className='w-4 h-4'
                  /> 1 hour ago
                </span>
              </Typography>
            </Box>
          </Box>
          <Box
            className={``}
          >
            <IconButton
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
            >
              <MessageCircleMore />
            </IconButton>
            <IconButton
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
            >
              <Ellipsis />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}
