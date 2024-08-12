import {
  Box
} from '@mui/material'
import Rightbar from '../../nav/Rightbar'
import TopFriend from './top-friend/TopFriend'
import FriendList from './my-friend/FriendList'

type Props = {}

export default function Friend({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >
        <TopFriend />
        <Box
          className='w-full flex justify-center items-start gap-8'
        >
          <Box
            className='w-2/3'
          >
            <FriendList />
          </Box>
          <Box
            className='w-1/3 flex flex-col justify-center items-center gap-8'
          >
            <Rightbar />
          </Box>
        </Box>
      </Box>
    </>
  )
}
