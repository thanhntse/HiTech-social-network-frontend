import {
  Box,
  Typography
} from '@mui/material'
import React from 'react'
import PostCard from './PostCard';
import RenderIf from '../../../components/RenderIf';
import posts from '../../../constants/demo-posts-list';
import { SearchX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Props = {}

export default function PostList({}: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >

        <RenderIf
          ifTrue={posts.length > 0}
        >
          <>
            {posts.map((post, index) => (
              <PostCard
                key={index}
                id={post.id}
                avatar={post.avatar}
                fullName={post.fullName}
                commentCount={post.commentCount}
                content={post.content}
                images={post.images}
                like={post.like}
              />
            ))}
          </>
        </RenderIf>

        <RenderIf
          ifTrue={posts.length === 0}
        >
          <Box
            className='flex gap-4 h-[300px] justify-center items-center'
          >
            <SearchX
              className='w-10 h-10'
            />
            <Typography
              className='text-3xl font-medium italic'
            >
              {t('noPostFound')}
            </Typography>
          </Box>
        </RenderIf>

      </Box>
    </>
  );
}
