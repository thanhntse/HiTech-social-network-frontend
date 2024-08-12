import { Image, Posts } from "../types";

const image: Image = {
  id: 1,
  imageNo: 1,
  url: '/images/demo-story.JPG',
  title: 'connectWithTheWorld',
  content: 'authImgContent'
};

const avatar: Image = {
  id: 1,
  imageNo: 1,
  url: '/images/demo-avt.png'
};

const posts: Posts[] = [
  {
    id: 1,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    images: [
      image,
      image,
      image,
      image,
      image,
      image,
      image
    ],
    content: '<div>Hello World!</div>',
    like: 99,
    commentCount: 8
  },
  {
    id: 2,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    images: [
      image,
      image,
      image,
      image
    ],
    content: '<div>Hello World!</div>',
    like: 99,
    commentCount: 8
  }
];

export default posts;
