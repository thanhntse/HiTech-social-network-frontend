import { Image, Story, UserStory } from "../types";

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

const stories: Story[] = [
  {
    id: 1,
    storyNo: 1,
    image: image
  },
  {
    id: 2,
    storyNo: 2,
    image: image
  }
];

const userStories: UserStory[] = [
  {
    id: 1,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 2,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 3,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 4,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 5,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 6,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 7,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 8,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 9,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  },
  {
    id: 10,
    fullName: 'Thanh Nguyen',
    avatar: avatar,
    stories: stories
  }
]

export default userStories;
