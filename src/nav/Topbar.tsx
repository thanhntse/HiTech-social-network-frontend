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
  Sun
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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type Props = {
  open: boolean;
  setOpen: () => void
}

const topBarItem: any[] = [
  { id: 1, label: "About me", url: "https://github.com/thanhntse" },
  { id: 2, label: "GitHub", url: "https://github.com/thanhntse" }
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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

  return (
    <>
      <AppBar
        className='bg-[#fcfcfc] shadow-sm shadow-gray-100 text-primary-txt'
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
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            className='shadow-sm shadow-primary animate-bounce rounded-lg hover:bg-primary-light hover:text-primary w-8 h-8 -mb-2'
          >
            {theme.direction === 'rtl' ? <MoveLeft /> : <MoveRight />}
          </IconButton>
          <Box
            className='flex w-full justify-between items-center'
          >
            <List
              className='flex justify-start items-center basis-1/5 text-sm'
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
                    className={`text-primary-txt p-0 hover:text-primary hover:bg-transparent transition-all ease-in-out duration-300 rounded-md`}
                    onClick={
                      () => window.open(item.url, '_blank')
                    }
                  >
                    <ListItemText
                      disableTypography
                      primary={item.label.toUpperCase()}
                      className='font-semibold'
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box
              className="px-10 w-full flex justify-end items-center gap-5"
            >
              <FormControl
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-search"
                  type='text'
                  placeholder='Search Here'
                  className='bg-primary-bg text-sm font-medium text-primary-txt'
                  startAdornment={
                    <InputAdornment position="start">
                      <Search color='#6f7f92' size={18}/>
                    </InputAdornment>
                  }
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e5e7eb',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2f65b9',
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
                  className='hover:bg-primary-light hover:text-primary'
                >
                  <Sun strokeWidth={1.5}/>
                </IconButton>
                <IconButton
                  color='inherit'
                  className='hover:bg-primary-light hover:text-primary'
                >
                  <Bell strokeWidth={1.5}/>
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
