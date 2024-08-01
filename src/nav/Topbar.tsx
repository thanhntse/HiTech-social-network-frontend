import { styled, useTheme } from '@mui/material/styles';
import { drawerWidth, drawerWidthClose } from './Sidebar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MoveLeft, MoveRight } from 'lucide-react';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type Props = {
  open: boolean;
  setOpen: () => void
}

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
        className='bg-[#fcfcfc] shadow-sm shadow-gray-100 text-gray-500'
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
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
