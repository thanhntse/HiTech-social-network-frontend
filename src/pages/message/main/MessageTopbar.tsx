import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import {
  ChevronLeft,
  EllipsisVertical,
  Maximize2,
  Minimize2
} from 'lucide-react'

type Props = {}

export default function MessageTopbar({ }: Props) {
  return (
    <>
      <Box
        className='w-full flex justify-between items-center bg-white dark:bg-bg-secondary-dark rounded-md p-3.5'
      >
        <Box
          className='w-full flex gap-1 items-center'
        >
          <IconButton
            className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
          >
            <ChevronLeft
              className='w-5 h-5'
            />
          </IconButton>
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
              className="w-9 h-9"
            />
            <Typography>
              Thanh Nguyen
            </Typography>
          </div>
        </Box>
        <Box
          className='flex gap-2'
        >
          <IconButton
            className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
          >
            <Maximize2
              className='w-5 h-5'
            />
            {/* <Minimize2
              className='w-5 h-5'
            /> */}
          </IconButton>
          <IconButton
            className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
          >
            <EllipsisVertical
              className='w-5 h-5'
            />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}
