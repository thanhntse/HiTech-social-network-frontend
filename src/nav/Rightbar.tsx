import ActiveUserList from '../pages/common/active-user/ActiveUserList'
import LatestActivityList from '../pages/common/latest-activity/LatestActivityList'
import ContactUs from '../pages/common/contact-us/ContactUs'

type Props = {}

export default function Rightbar({ }: Props) {
  return (
    <>
      <ActiveUserList />
      <LatestActivityList />
      <ContactUs />
    </>
  )
}
