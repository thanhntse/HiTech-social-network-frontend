import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AuthCarouselProps } from './index';
import SpinnerLoading from '../SpinnerLoading';
import { useTranslation } from 'react-i18next';

const AuthCarousel: React.FC<AuthCarouselProps> = ({ images, imgClassName, className }) => {
  const { t } = useTranslation();

  return (
    <div className={`${className}`}>
      {
      images?.length > 0
      ?
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        thumbWidth={100}
        transitionTime={1000}
      >
        {images.map((image) => (
          <div key={image.id}>
            <div className={`${imgClassName} mx-auto`}>
              <img
                src={image.url}
                alt={`Image ${image.imageNo}`}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="mt-8 text-center text-white">
              <div className='text-3xl mb-5 font-semibold'>
                {image.title ? t(image.title) : `Title ${image.imageNo}`}
              </div>
              <div className='max-w-80 mx-auto'>
                {image.content ? t(image.content) : `Content for image ${image.imageNo}`}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      :
      <div className="h-[400px] flex items-center justify-center">
        <SpinnerLoading
          height='80'
          width='80'
          color='#2B5A50'
        />
      </div>
      }
    </div>
  );
};

export default AuthCarousel;
