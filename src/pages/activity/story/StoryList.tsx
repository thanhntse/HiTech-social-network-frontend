import {
  Box,
  IconButton
} from '@mui/material'
import StoryCard from './StoryCard'
import userStories from '../../../constants/demo-story-list'
import { useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type Props = {}

export default function StoryList({ }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -296 : 296;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        className='flex items-center justify-center gap-5 rounded-md'
        sx={{
          overflow: 'hidden',
          scrollBehavior: 'smooth',
        }}
      >
        <IconButton
          onClick={() => handleScroll('left')}
          className="text-inherit bg-white dark:bg-bg-secondary-dark shadow-gray-200 dark:shadow-bg-secondary-dark shadow-lg hover:bg-primary-light hover:text-primary dark:hover:bg-bg-secondary-dark dark:hover:text-primary-dark transition-all ease-in-out duration-100 mb-10 group"
        >
          <ChevronLeft
            className='w-10 h-10 group-hover:scale-110 transition-all ease-in-out duration-300'
          />
        </IconButton>
        <Box
          ref={scrollContainerRef}
          className="flex gap-5 max-w-[868px] 3xl:max-w-[1164px] overflow-x-auto whitespace-nowrap"
          sx={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {userStories.map((user) => (
            <StoryCard
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              fullName={user.fullName}
              stories={user.stories}
            />
          ))}
        </Box>
        <IconButton
          onClick={() => handleScroll('right')}
          className="text-inherit bg-white dark:bg-bg-secondary-dark shadow-gray-200 dark:shadow-bg-secondary-dark shadow-lg hover:bg-primary-light hover:text-primary dark:hover:bg-bg-secondary-dark dark:hover:text-primary-dark transition-all ease-in-out duration-100 mb-10 group"
        >
          <ChevronRight
            className='w-10 h-10 group-hover:scale-110 transition-all ease-in-out duration-300'
          />
        </IconButton>
      </Box>
    </>
  )
}
