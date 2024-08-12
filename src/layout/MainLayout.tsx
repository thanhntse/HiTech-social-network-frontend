import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../nav/Sidebar';
import Topbar from '../nav/Topbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../nav/Footer';

type Props = {
  mode: 'light' | 'dark';
  toggleMode: any
}

const HeaderSpacing = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MainLayout({ mode, toggleMode }: Props) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{ display: 'flex' }}
      className='min-h-screen font-primary text-base overflow-auto'
    >
      <CssBaseline />
      <Topbar
        open={open}
        setOpen={handleDrawerOpen}
      />
      <Sidebar
        open={open}
        setClose={handleDrawerClose}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Box
        className='bg-bg-primary-light dark:bg-bg-primary-dark text-gray-800 dark:text-white flex flex-col'
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <HeaderSpacing />
        <Box
          className='max-w-screen-1440 mx-auto w-full'
        >
          <Outlet />
        </Box>
        <Box
          className='mt-6 flex-1 max-w-screen-1440 mx-auto flex items-end w-full'
        >
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
