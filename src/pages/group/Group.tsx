import { Box } from '@mui/material'
import React from 'react'
import TopGroup from './top-group/TopGroup'
import MyGroups from './group-list/MyGroups'
import Rightbar from '../../nav/Rightbar'

type Props = {}

export default function Group({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >
        <TopGroup />
        <Box
          className='w-full flex justify-center items-start gap-8'
        >
          <Box
            className='w-2/3'
          >
            <MyGroups />
          </Box>
          <Rightbar />
        </Box>
      </Box>
    </>
  )
}
