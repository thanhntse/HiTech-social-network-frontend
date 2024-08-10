import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import { MessageCircleMore } from 'lucide-react'

type Props = {
  avatar: string,
  fullName: string
}

export default function LatestActivityCard({ avatar, fullName }: Props) {
  return (
    <>
      <hr className='w-full opacity-10' />
      <Box
        className='w-full flex items-center justify-between'
      >
        <Box
          className='flex items-center gap-3'
        >
          <Avatar
            alt={`Avatar ${fullName}`}
            src={avatar}
            className="w-10 h-10"
          />

          <Typography
            className='font-semibold hover:text-primary dark:hover:text-primary-dark transition-all ease-in-out duration-300 cursor-pointer'
          >
            {fullName}
          </Typography>
        </Box>
        <IconButton
          className="text-inherit hover:bg-primary-light hover:text-primary dark:hover:bg-bg-primary-dark dark:hover:text-primary-dark transition-all ease-in-out duration-300 hover:scale-110"
        >
          <MessageCircleMore />
        </IconButton>
      </Box>
    </>
  )
}
