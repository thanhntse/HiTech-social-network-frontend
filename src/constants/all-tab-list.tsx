import AllGroups from "../pages/group/group-list/AllGroups";
import MyGroups from "../pages/group/group-list/MyGroups";
import AllMembers from "../pages/member/member-list/AllMembers";
import MyFriends from "../pages/member/member-list/MyFriends";
import { TabItemProps } from "../types";

export const memberTabItems: TabItemProps[] = [
  { value: '1', label: 'allMembers', children: <AllMembers /> },
  { value: '2', label: 'myFriends', children: <MyFriends /> },
];

export const groupTabItems: TabItemProps[] = [
  { value: '1', label: 'allGroups', children: <AllGroups /> },
  { value: '2', label: 'myGroups', children: <MyGroups /> },
];
