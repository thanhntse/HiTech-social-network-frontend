import {
  Box
} from '@mui/material'
import TopGroup from './top-group/TopGroup'
import Rightbar from '../../nav/Rightbar'
import GroupList from './group-list/GroupList'

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
            <GroupList />
          </Box>
          <Rightbar />
        </Box>
      </Box>
    </>
  )
}
