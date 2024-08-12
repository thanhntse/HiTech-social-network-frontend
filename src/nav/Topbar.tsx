import { styled, useTheme } from '@mui/material/styles';
import { drawerWidth, drawerWidthClose } from './Sidebar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {
  Bell,
  MoveLeft,
  MoveRight,
  Search,
} from 'lucide-react';
import {
  Avatar,
  Box,
  FormControl,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  OutlinedInput
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type Props = {
  open: boolean;
  setOpen: () => void;
}

const topBarItem: any[] = [
  { id: 1, label: "aboutMe", url: "https://github.com/thanhntse" },
  { id: 2, label: "GitHub", url: "https://github.com/thanhntse" }
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundImage: 'none',
  width: `calc(100% - ${drawerWidthClose}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Topbar({ open, setOpen }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <AppBar
        className='bg-[#fcfcfc] dark:bg-bg-secondary-dark dark:shadow-none shadow-sm shadow-gray-100 text-txt-primary-light dark:text-txt-primary-dark'
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={setOpen}
            edge="start"
            sx={{
              ...(open && { display: 'none' }),
            }}
            className='shadow-sm shadow-primary animate-bounce rounded-lg hover:bg-primary-light hover:text-primary dark:hover:bg-bg-primary-dark dark:hover:text-white w-8 h-8 -mb-2 mr-5 3xl:-mr-5'
          >
            {theme.direction === 'rtl' ? <MoveLeft /> : <MoveRight />}
          </IconButton>
          <Box
            className='flex w-full justify-between items-center max-w-screen-1440 mx-auto'
          >
            <List
              className='flex justify-start items-center basis-1/6 text-sm'
            >
              {topBarItem.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? 'initial' : 'center',
                    }}
                    className={`text-txt-primary-light dark:text-txt-primary-dark p-0 hover:text-primary dark:hover:text-primary-dark hover:bg-transparent transition-all ease-in-out duration-300 rounded-md`}
                    onClick={
                      () => window.open(item.url, '_blank')
                    }
                  >
                    <ListItemText
                      disableTypography
                      primary={t(item.label).toUpperCase()}
                      className='font-semibold'
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box
              className="w-full flex justify-end items-center gap-5"
            >
              <FormControl
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-search"
                  type='text'
                  placeholder={t('searchHere')}
                  className='bg-bg-primary-light dark:bg-bg-primary-dark text-sm font-medium text-txt-primary-light dark:text-txt-primary-dark border border-gray-200 dark:border-bg-secondary-dark'
                  startAdornment={
                    <InputAdornment position="start">
                      <Search className='text-txt-primary-light dark:text-txt-primary-dark' size={18}/>
                    </InputAdornment>
                  }
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'inherit',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'inherit',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2a5aa6',
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '10px 12px',
                    },
                  }}
                />
              </FormControl>

              <Box
                className='flex gap-2'
              >
                <IconButton
                  color='inherit'
                  className='hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark transition-all duration-300 ease-in-out hover:scale-110'
                >
                  <Bell />
                </IconButton>
              </Box>

              <Box>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  className="w-12 h-12"
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
