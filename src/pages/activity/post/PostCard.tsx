import {
  Box
} from '@mui/material'
import React from 'react'

type Props = {}

export default function PostCard({}: Props) {
  return (
    <>
      <Box
        className={`w-full bg-white dark:bg-bg-secondary-dark h-[500px] rounded-lg flex justify-center items-center shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md`}
      >
        PostCard
      </Box>
    </>
  )
}
