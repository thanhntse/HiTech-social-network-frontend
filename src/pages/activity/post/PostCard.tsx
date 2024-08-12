import {
  Avatar,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import React from 'react'
import { Image, Posts } from '../../../types';
import {
  Ellipsis,
  X
} from 'lucide-react';

export default function PostCard({
  id,
  fullName,
  avatar,
  images,
  content,
  like,
  commentCount
}: Posts) {
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
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Typography>
        </Box>
        <Box
          className='w-full'
        >
          <hr className='opacity-20'/>
        </Box>
      </Box>
    </>
  )
}
