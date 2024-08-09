import {
  Box
} from '@mui/material'
import StoryCard from './StoryCard'
import userStories from '../../../constant/demo-story-list'

type Props = {}

export default function StoryList({}: Props) {
  return (
    <>
      <Box
        className='w-full flex justify-center items-center gap-5'
      >
        {userStories.map((user) => (
          <StoryCard
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            fullName={user.fullName}
            stories={user.stories}
          />
        ))}
      </Box>
    </>
  )
}
