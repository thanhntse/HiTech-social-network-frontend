import {
  Avatar,
  Box,
  Typography
} from '@mui/material'
import { UserStory } from '../../../types'

export default function StoryCard(props: UserStory) {
  return (
    <>
      <Box
        className={``}
      >
        <Box
          className={`h-40 w-32 relative`}
        >
          <img
            src={props.stories[0].image.url}
            alt={`User Story ${props.id}`}
            className='object-cover object-center w-full h-full rounded-md cursor-pointer hover:brightness-75 dark:hover:brightness-50 transition-all ease-in-out duration-200'
          />
          <Box
            className={`absolute left-1/2 -translate-x-1/2 -bottom-5 w-11 h-11 bg-bg-primary-light dark:bg-bg-primary-dark rounded-full flex flex-col justify-center items-center`}
          >
            <Avatar
              alt={`Avatar ${props.id}`}
              src={props.avatar.url}
              className="w-10 h-10"
            />
          </Box>
        </Box>
        <Typography
          className='text-sm font-semibold text-center mt-6 hover:scale-105 hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-all ease-in-out duration-200'
        >
          {props.fullName}
        </Typography>
      </Box>
    </>
  )
}
