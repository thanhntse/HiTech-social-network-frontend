import {
  Box
} from '@mui/material'
import Rightbar from '../../nav/Rightbar'
import TopFriend from './top-friend/TopFriend'
import MemberList from './member-list/MemberList'

type Props = {}

export default function Member({ }: Props) {
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
            <MemberList />
          </Box>
          <Rightbar />
        </Box>
      </Box>
    </>
  )
}
