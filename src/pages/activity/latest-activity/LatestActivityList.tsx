import {
  Box
} from '@mui/material'
import React from 'react'
import LatestActivityCard from './LatestActivityCard'

type Props = {}

export default function LatestActivityList({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-3 bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-5'
      >
        <LatestActivityCard />
        <LatestActivityCard />
        <LatestActivityCard />
        <LatestActivityCard />
        <LatestActivityCard />
      </Box>
    </>
  )
}
