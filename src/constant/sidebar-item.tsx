import {
  HeartHandshake,
  MessageCircleMore,
  SquareActivity,
  Users
} from "lucide-react";

type SidebarItemProps = {
  id: number,
  label: string,
  path: string,
  icon: React.ReactNode
}

const sideBarItem: SidebarItemProps[] = [
  { id: 1, label: "activity", path: "/activity", icon: <SquareActivity /> },
  { id: 2, label: "members", path: "/member", icon: <Users /> },
  { id: 3, label: "messages", path: "/message", icon: <MessageCircleMore /> },
  { id: 4, label: "groups", path: "/group", icon: <HeartHandshake /> },
];

export default sideBarItem;
