import {
  Box
} from '@mui/material'
import MessageSidebar from './sidebar/MessageSidebar'
import MessageMain from './main/MessageMain'

type Props = {}

export default function Message({}: Props) {
  return (
    <>
      <Box
        className='w-full flex gap-8'
      >
        <Box
          className='w-1/3'
        >
          <MessageSidebar />
        </Box>
        <Box
          className='w-2/3'
        >
          <MessageMain />
        </Box>
      </Box>
    </>
  )
}
