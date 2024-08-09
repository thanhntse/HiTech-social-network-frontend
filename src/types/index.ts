export interface Image {
  id: number;
  imageNo: number;
  url: string;
  title?: string;
  content?: string;
}

export interface Story {
  id: number;
  storyNo: number;
  image: Image;
  music?: any;
}

export interface UserStory {
  id: number;
  fullName: string;
  avatar: Image;
  stories: Story[]
}
