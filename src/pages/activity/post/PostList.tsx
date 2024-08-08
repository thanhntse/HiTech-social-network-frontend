import {
  Box
} from '@mui/material'
import React from 'react'
import PostCard from './PostCard';

type Props = {}

export default function PostList({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-5'
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Box>
    </>
  );
}
