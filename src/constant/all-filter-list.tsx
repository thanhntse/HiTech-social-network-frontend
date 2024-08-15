import { Option } from "../types";

export const filterFriendsOptions: Option[] = [
  { value: 'lastActive', label: 'lastActive' },
  { value: 'newestAdd', label: 'newestAdd' },
  { value: 'alphabetical', label: 'alphabetical' },
];

export const filterGroupsOptions: Option[] = [
  { value: 'lastPost', label: 'lastPost' },
  { value: 'lastJoin', label: 'lastJoin' },
  { value: 'lastCreate', label: 'lastCreate' },
  { value: 'alphabetical', label: 'alphabetical' },
];
