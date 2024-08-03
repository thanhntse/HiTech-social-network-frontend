import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  HeartHandshake,
  MessageCircleMore,
  MoveLeft,
  MoveRight,
  SquareActivity,
  Users
} from 'lucide-react';

type Props = {
  open: boolean;
  setClose: () => void
}

export const drawerWidth = 270;
export const drawerWidthClose = 88;

const sideBarItem: any[] = [
  { id: 1, label: "Activity", icon: <SquareActivity /> },
  { id: 2, label: "Friends", icon: <Users /> },
  { id: 3, label: "Messages", icon: <MessageCircleMore /> },
  { id: 4, label: "Groups", icon: <HeartHandshake /> }
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'inherit',
  border: 0
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidthClose,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'inherit',
  border: 0
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar({open, setClose}: Props) {
  const theme = useTheme();

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        className='z-10 shadow-2xl shadow-gray-200 dark:bg-bg-secondary-dark dark:shadow-none'
      >
        <DrawerHeader>
          <Box className={`flex gap-3 items-center ${open ? "pl-6" : "pl-4"}`}
          >
            <img src="./favicon.svg"
              alt="logo"
              className="w-10 h-10"
            />
            {
              open &&
              <Typography className="text-3xl font-semibold text-gray-800 dark:text-white">
                HiTech
              </Typography>
            }
          </Box>
          {
            open &&
            <IconButton
              onClick={setClose}
              className='shadow-sm shadow-primary text-txt-primary-light dark:text-txt-primary-dark animate-bounce rounded-lg hover:bg-primary-light hover:text-primary dark:hover:bg-bg-primary-dark dark:hover:text-white w-8 h-8 -mb-2'
            >
              {theme.direction === 'rtl' ? <MoveRight /> : <MoveLeft />}
            </IconButton>
          }
        </DrawerHeader>
        <Divider className="opacity-50"/>
        <List>
          {sideBarItem.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ display: 'block' }}
              className='mb-1.5'
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  mx: 2
                }}
                className={`${item.id === 1 ? "bg-primary text-white" : "hover:bg-primary-light text-txt-primary-light hover:text-primary dark:text-txt-primary-dark dark:hover:bg-bg-primary-dark dark:hover:text-white"} transition-all ease-in-out duration-300 rounded-md`}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 0,
                    justifyContent: 'center',
                    color: 'inherit'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={item.label}
                  sx={{ display: open ? 'block' : 'none' }}
                  className='font-semibold'
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
