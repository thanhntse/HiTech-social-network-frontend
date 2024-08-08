import {
  Box
} from '@mui/material'
import React from 'react'
import ActiveUserCard from './ActiveUserCard'

type Props = {}

export default function ActiveUserList({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-3'
      >
        <ActiveUserCard />
        <ActiveUserCard />
        <ActiveUserCard />
        <ActiveUserCard />
        <ActiveUserCard />
      </Box>
    </>
  )
}
