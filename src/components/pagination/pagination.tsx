import React from 'react';
import { PaginationProps } from './index';
import {
  Stack,
  Pagination as MUIPagination,
  PaginationItem
} from '@mui/material';

const Pagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange
}) => {

  const handlePageChange = (event: any, value: any) => {
    // const top = document.getElementById('top');
    // if (top) {
    //   const offset = 64;
    //   const elementPosition = top.getBoundingClientRect().top;
    //   const offsetPosition = elementPosition + window.scrollY - offset;

    //   window.scrollTo({
    //     top: offsetPosition,
    //     behavior: 'smooth'
    //   });
    // }

    onChange(event, value);
  };

  return (
    <>
      <Stack spacing={2}
        className='mx-auto mt-8'
      >
        <MUIPagination
          count={count}
          color="primary"
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              className={`mx-0.5 w-8 h-8 border rounded-full text-sm font-medium ${
                item.page === page
                  ? 'bg-primary dark:bg-primary-dark border-primary dark:border-primary-dark'
                  : 'hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark'
              }`}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default Pagination;
