import {
  Box
} from '@mui/material'
import React from 'react'
import StoryList from './story/StoryList'
import PostList from './post/PostList'
import ActiveUserList from './active-user/ActiveUserList'
import LatestActivityList from './latest-activity/LatestActivityList'
import ContactUs from './contact-us/ContactUs'

type Props = {}

export default function Activity({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-5'
      >
        <StoryList />
        <Box
          className='w-full flex justify-center items-start gap-5'
        >
          <Box
            className='w-2/3'
          >
            <PostList />
          </Box>
          <Box
            className='w-1/3 flex flex-col justify-center items-center gap-5'
          >
            <ActiveUserList />
            <LatestActivityList />
            <ContactUs />
          </Box>
        </Box>
      </Box>
    </>
  )
}
