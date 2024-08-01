import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Switch,
  Typography,
} from "@mui/material";
import React, { SetStateAction } from "react";

interface SidebarProps {
  setMode: any;
  mode: string | undefined;
}


const Sidebar: React.FC<SidebarProps> = ({ setMode, mode }) => {
  return (
    <Box className="max-w-[16.8rem] bg-white" sx={{ display: { xs: "none", sm: "block" } }}>
      <Box className="flex gap-3 items-center px-8 py-4"
        borderBottom={1}
        borderColor={"#e5e7eb"}
      >
        <img src="./favicon.svg"
          alt="logo"
          className="w-10 h-10"
        />
        <Typography className="text-3xl font-semibold">
          HiTech
        </Typography>
      </Box>
      <Box>
        <Box className="flex gap-4 mx-8 pt-8 pb-6"
          borderBottom={1}
          borderColor={"#e5e7eb"}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
            className="w-12 h-12"
          />
          <div className="flex flex-col gap-1.5">
            <div className="font-semibold">
              Thanh Nguyen
            </div>
            <div className="text-xs font-medium text-primary-txt">
              @thanhnt
            </div>
          </div>
        </Box>
        <List className="mx-8">
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
