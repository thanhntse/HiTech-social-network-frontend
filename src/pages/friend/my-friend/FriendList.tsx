import {
  Box,
  Typography
} from '@mui/material'
import RenderIf from '../../../components/RenderIf'
import { SearchX } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import FriendCard from './FriendCard';

type Props = {}

export default function FriendList({ }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </Box>
    </>
  )
}
