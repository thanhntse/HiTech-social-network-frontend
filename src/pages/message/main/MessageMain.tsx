import MessageTopbar from './MessageTopbar'
import MessageBox from './MessageBox'
import {
  Box
} from '@mui/material'

type Props = {}

export default function MessageMain({}: Props) {
  return (
    <>
      <Box
        className='w-full flex flex-col gap-4'
      >
        <MessageTopbar />
        <MessageBox />
      </Box>
    </>
  )
}
