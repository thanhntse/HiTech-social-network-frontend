import {
  Box
} from '@mui/material'
import React from 'react'
import StoryCard from './StoryCard'

type Props = {}

export default function StoryList({}: Props) {
  return (
    <>
      <Box
        className='w-full flex justify-center items-center gap-5'
      >
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </Box>
    </>
  )
}
