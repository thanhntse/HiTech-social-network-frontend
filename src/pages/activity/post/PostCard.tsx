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
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
            >
              <Ellipsis />
            </IconButton>
            <IconButton
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
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
          className=''
        >
          <RenderIf
            ifTrue={images.length === 1}
          >
            <img
              src={images[0]?.url}
              alt="Image"
              className='object-cover object-center w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
            />
          </RenderIf>
          <RenderIf
            ifTrue={images.length === 2}
          >
            <div
              className='flex gap-1 w-full'
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className='basis-1/2'
                >
                  <img
                    src={image?.url}
                    alt={`Image ${index}`}
                    className='object-cover object-center w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                  />
                </div>
              ))}
            </div>
          </RenderIf>
          <RenderIf
            ifTrue={images.length === 3}
          >
            <div
              className='flex flex-col gap-1 w-full'
            >
              <img
                src={images[0]?.url}
                alt={`Image 1`}
                className='object-cover object-center w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
              />
              <div
                className='flex gap-1 w-full'
              >
                {images
                  .filter((_, index) => index !== 0)
                  .map((image, index) => (
                    <div
                      className='basis-1/2'
                      key={index}
                    >
                      <img
                        src={image?.url}
                        alt={`Image ${index}`}
                        className='object-cover object-center w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                      />
                    </div>
                  ))}
              </div>
            </div>
          </RenderIf>
          <RenderIf
            ifTrue={images.length === 4}
          >
            <div
              className='grid grid-cols-2 gap-1 w-full'
            >
              {images
                .map((image, index) => (
                  <img
                    key={index}
                    src={image?.url}
                    alt={`Image ${index}`}
                    className='object-cover object-center w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                  />
                ))}
            </div>
          </RenderIf>
          <RenderIf
            ifTrue={images.length === 5}
          >
            <div
              className='flex gap-1 w-full'
            >
              <div
                className='basis-1/2 flex flex-col gap-1'
              >
                {images
                  .filter((_, index) => index === 0 || index === 1)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image?.url}
                      alt={`Image ${index}`}
                      className='object-cover object-center h-1/2 w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                    />
                  ))}
              </div>
              <div
                className='basis-1/2 flex flex-col gap-1'
              >
                {images
                  .filter((_, index) => index !== 0 && index !== 1)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image?.url}
                      alt={`Image ${index}`}
                      className='object-cover object-center h-1/2 w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                    />
                  ))}
              </div>
            </div>
          </RenderIf>
          <RenderIf
            ifTrue={images.length > 5}
          >
            <div
              className='flex gap-1 w-full'
            >
              <div
                className='basis-1/2 flex flex-col gap-1'
              >
                {images
                  .filter((_, index) => index === 0 || index === 1)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image?.url}
                      alt={`Image ${index}`}
                      className='object-cover object-center h-1/2 w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                    />
                  ))}
              </div>
              <div
                className='basis-1/2 flex flex-col gap-1'
              >
                {images
                  .filter((_, index) => index === 2 || index === 3)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image?.url}
                      alt={`Image ${index}`}
                      className='object-cover object-center h-1/3 w-full rounded-md cursor-pointer hover:brightness-75 transition-all ease-in-out duration-300'
                    />
                  ))}
                <div className='flex items-center justify-center h-1/3 relative'>
                  <img
                    src={images[4]?.url}
                    alt={`Image 4`}
                    className='object-cover object-center w-full rounded-md cursor-pointer brightness-50 transition-all ease-in-out duration-300'
                  />
                  <div className='absolute text-white text-3xl font-medium'>
                    +{images.length - 5}
                  </div>
                </div>
              </div>
            </div>
          </RenderIf>
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
            <IconButton className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'>
              <MessageCircle />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}
