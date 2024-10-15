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
  MoveLeft,
  MoveRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import ModeSwitch from '../components/theme-mode-switch/ModeSwitch';
import sideBarItem from '../constant/sidebar-item';

type Props = {
  open: boolean;
  setClose: () => void;
  mode: 'light' | 'dark';
  toggleMode: any
}

export const drawerWidth = 270;
export const drawerWidthClose = 88;

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

export default function Sidebar({ open, setClose, mode, toggleMode }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

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
        <Divider className="opacity-50" />
        <List>
          {sideBarItem.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ display: 'block' }}
              className='mb-1.5'
            >
              <NavLink
                to={item.path}
                style={() => ({
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                })}
              >
                {({ isActive }) => (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      mx: 2
                    }}
                    className={`${isActive ? "bg-primary text-white" : "hover:bg-primary-light text-txt-primary-light hover:text-primary dark:text-txt-primary-dark dark:hover:bg-bg-primary-dark dark:hover:text-white"} transition-all ease-in-out duration-300 rounded-md`}
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
                      primary={t(item.label)}
                      sx={{ display: open ? 'block' : 'none' }}
                      className='font-semibold'
                    />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Box
          className="flex-1 flex justify-center items-end"
        >
          <Box
            className={`w-full bg-primary-light dark:bg-bg-primary-dark flex justify-center items-center
              ${open ? "h-16 gap-10 p-4 m-4 rounded-lg" : "gap-4 py-4 flex-col"}`}
          >
            <ModeSwitch
              mode={mode}
              toggleMode={toggleMode}
            />
            <LanguageSelector />
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
