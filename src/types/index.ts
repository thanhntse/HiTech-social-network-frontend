import React from 'react';

export interface Option {
  value: string,
  label: string
}

export interface TabItemProps {
  value: string,
  label: string,
  children: React.ReactNode
}

export interface SidebarItemProps {
  id: number,
  label: string,
  path: string,
  icon: React.ReactNode
}

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

export interface Posts {
  id: number;
  fullName: string;
  avatar: Image;
  images: Image[]
  content: string;
  like: number;
  commentCount: number;
}
