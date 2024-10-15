import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import friendList from '../../../../constants/demo-friend-list'
import {
  User
} from 'lucide-react'

type Props = {}

export default function FriendsTab({ }: Props) {
  return (
    <>
      <Box
        className='w-full h-full flex flex-col gap-3 p-3'
      >
        {friendList.map((friend, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3.5 bg-primary-light dark:bg-bg-primary-dark rounded-md hover:bg-blue-100 dark:hover:bg-blue-950 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex gap-2 items-center">
              <Avatar
                alt={`avatar ${index}`}
                src={friend.avatar}
                className="w-9 h-9"
              />
              <Typography
                className='text-sm font-medium'
              >
                {friend.fullName}
              </Typography>
            </div>
            <IconButton
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
            >
              <User
                className='w-5 h-5'
              />
            </IconButton>
          </div>
        ))}
      </Box>
    </>
  )
}
