import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import {
  CalendarDays,
  Ellipsis,
  FileText,
  MapPin,
  MessageCircleMore,
  User,
  Users,
} from 'lucide-react'
import { useTranslation } from 'react-i18next';
import Button from '../../../components/button';

type Props = {
  avatar: string,
  background: string,
  name: string,
  memberCount: number,
  postCount: number,
  memberAvatarList: string[]
}

export default function GroupCard({
  avatar,
  background,
  name,
  memberCount,
  postCount,
  memberAvatarList
}: Props) {
  const { t } = useTranslation();
  const btnList: any[] = [
    {
      id: 1,
      btn:
        <Button
          size='large'
          className='bg-yellow-50 dark:bg-yellow-950 border border-yellow-500 border-solid text-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out font-semibold shadow-none uppercase py-2.5 px-7'
        >
          {t('pending')}...
        </Button>
    },
    {
      id: 2,
      btn:
        <Button
          size='large'
          className='bg-red-100 dark:bg-red-950 border border-red-500 border-solid text-red-500 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out font-semibold shadow-none uppercase py-2.5 px-7'
        >
          {t('leaveGroup')}
        </Button>
    },
    {
      id: 3,
      btn:
        <Button
          size='large'
          className='bg-blue-100 dark:bg-blue-950 border border-primary border-solid text-primary hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 ease-in-out font-semibold shadow-none uppercase py-2.5 px-7'
        >
          {t('joinGroup')}
        </Button>
    },
  ]

  return (
    <>
      <Box
        className='bg-primary-light border border-gray-200 dark:border-gray-800 border-solid dark:bg-bg-primary-dark w-full rounded-md'
      >
        <Box
          className='w-full relative mb-14'
        >
          <img
            src={background}
            alt={`background ${name}`}
            className='h-32 w-full object-cover object-center rounded-t-md'
          />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 p-1 bg-white dark:bg-bg-secondary-dark rounded-md flex">
            <img
              src={avatar}
              alt={`avatar ${name}`}
              className='h-20 w-20 object-cover object-center rounded-sm'
            />
          </div>
        </Box>
        <Box
          className='w-full px-8 pb-8 flex flex-col'
        >
          <div className="w-full text-center text-xl font-semibold hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">
            {name}
          </div>
          <div className="flex justify-center items-center gap-4 mt-2">
            <div className="text-sm flex gap-1 font-medium items-center justify-center text-txt-primary-light dark:text-txt-primary-dark hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">
              <FileText
                strokeWidth={1.5}
                className='w-4 h-4'
              />
              <span>{t('posts')}</span>
              {postCount}
            </div>
            <div className="text-sm flex gap-1 font-medium items-center justify-center text-txt-primary-light dark:text-txt-primary-dark hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">
              <Users
                strokeWidth={1.5}
                className='w-4 h-4'
              />
              <span>{t('members')}</span>
              {memberCount}
            </div>
          </div>
          <hr className='w-full opacity-20 dark:opacity-10 my-5' />
          <Box
            className='w-full flex justify-center items-center mb-5'
          >
            <AvatarGroup max={4}>
              {memberAvatarList.map((member, index) => (
                <Avatar
                  key={index}
                  alt={`Avatar ${index}`}
                  src={member}
                />
              ))}
            </AvatarGroup>
          </Box>
          <Box
            className='w-full flex justify-center'
          >
            {/* <Button
              size='large'
              className='bg-blue-100 dark:bg-blue-950 border border-primary border-solid text-primary hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 ease-in-out font-semibold shadow-none uppercase py-2.5 px-7'
            >
              {t('joinGroup')}
            </Button>
            <Button
              size='large'
              className='bg-red-100 dark:bg-red-950 border border-red-500 border-solid text-red-500 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out font-semibold shadow-none uppercase py-2.5 px-7'
            >
              {t('leaveGroup')}
            </Button>
            <Button
              size='large'
              className='bg-yellow-50 dark:bg-yellow-950 border border-yellow-500 border-solid text-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out font-semibold shadow-none uppercase py-2.5 px-7'
            >
              {t('pending')}...
            </Button> */}

            { btnList[Math.floor(Math.random() * 3)]?.btn }
          </Box>
        </Box>
      </Box>
    </>
  )
}
