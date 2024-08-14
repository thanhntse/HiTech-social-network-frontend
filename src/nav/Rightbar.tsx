import ActiveUserList from '../pages/common/active-user/ActiveUserList'
import LatestActivityList from '../pages/common/latest-activity/LatestActivityList'
import ContactUs from '../pages/common/contact-us/ContactUs'
import { Box } from '@mui/material'

type Props = {}

export default function Rightbar({ }: Props) {
  return (
    <>
      <Box
        className='w-1/3 flex flex-col items-center gap-8 sticky top-20 z-10 overflow-y-auto max-h-[calc(100vh-80px)] rounded-lg'
      >
        <ActiveUserList />
        <LatestActivityList />
        <ContactUs />
      </Box>
    </>
  )
}
