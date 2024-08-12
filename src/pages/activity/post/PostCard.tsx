import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import { Posts } from '../../../types';
import {
  Ellipsis,
  MessageCircle,
  X
} from 'lucide-react';
import Heart from '../../../components/heart-checkbox/Heart';
import { useTranslation } from 'react-i18next';
import RenderIf from '../../../components/RenderIf';

export default function PostCard({
  id,
  fullName,
  avatar,
  images,
  content,
  like,
  commentCount
}: Posts) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className={`w-full bg-white dark:bg-bg-secondary-dark rounded-lg flex flex-col gap-3 shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8`}
      >

        <Box
          className={`w-full flex justify-between items-start`}
        >
          <Box
            className={`flex gap-4 items-center`}
          >
            <Avatar
              alt={`Avatar ${fullName}`}
              src={avatar.url}
              className="w-16 h-16"
            />
            <Box
              className={`w-full`}
            >
              <Typography
                className='font-semibold text-lg hover:text-primary dark:hover:text-primary-dark transition-all ease-in-out duration-300 cursor-pointer'
              >
                {fullName}
              </Typography>
              <Typography
                className='text-xs font-medium text-txt-primary-light dark:text-txt-primary-dark'
              >
                1 hour ago
              </Typography>
            </Box>
          </Box>
          <Box
            className={``}
          >
            <IconButton
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark'
            >
              <Ellipsis />
            </IconButton>
            <IconButton
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark'
            >
              <X />
            </IconButton>
          </Box>
        </Box>

        <Box
          className=''
        >
          <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </Box>

        <Box
          className='w-full flex justify-between items-center'
        >
          <RenderIf
            ifTrue={like > 0}
          >
            <div
              className='flex gap-1 items-center'
            >
              <svg
                viewBox="0 0 24 24"
                fill='rgb(255, 91, 137)'
                xmlns="http://www.w3.org/2000/svg"
                className='w-5 h-5'
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                </path>
              </svg>
              <div
                className='text-sm font-medium hover:text-primary dark:hover:text-primary-dark transition-all duration-300 ease-in-out cursor-pointer'
              >
                {like}
              </div>
            </div>
          </RenderIf>
          <RenderIf
            ifTrue={commentCount > 0}
          >
            <div
              className='text-sm font-medium hover:text-primary dark:hover:text-primary-dark transition-all duration-300 ease-in-out cursor-pointer'
            >
              <RenderIf
                ifTrue={commentCount === 1}
              >
                {commentCount} {t('comment')}
              </RenderIf>
              <RenderIf
                ifTrue={commentCount > 1}
              >
                {commentCount} {t('comments')}
              </RenderIf>
            </div>
          </RenderIf>
        </Box>

        <Box
          className='w-full'
        >
          <hr className='opacity-20 m-0 mb-2' />
          <Box
            className='w-full flex justify-start items-center gap-1 -mb-4'
          >
            <Heart />
            <IconButton className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark'>
              <MessageCircle />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}
