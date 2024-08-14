import {
  Box
} from '@mui/material'
import StoryList from './story/StoryList'
import PostList from './post/PostList'
import Rightbar from '../../nav/Rightbar'

type Props = {}

export default function Activity({ }: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >
        <StoryList />
        <Box
          className='w-full flex justify-center items-start gap-8'
        >
          <Box
            className='w-2/3'
          >
            <PostList />
          </Box>
          <Rightbar />
        </Box>
      </Box>
    </>
  )
}
