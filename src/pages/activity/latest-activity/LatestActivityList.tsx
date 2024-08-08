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
        className='w-full flex flex-col justify-center items-center gap-3'
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
