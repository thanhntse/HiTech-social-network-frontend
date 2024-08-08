import {
  Box,
  CssBaseline,
  IconButton
} from "@mui/material";
import { Outlet } from "react-router-dom";
import AuthCarousel from "../components/carousel/AuthCarousel";
import images from "../constant/auth-img";
import LanguageSelector from "../components/LanguageSelector";
import {
  Moon,
  Sun
} from "lucide-react";

type Props = {
  mode: 'light' | 'dark';
  toggleMode: any
}

export default function AuthLayout({ mode, toggleMode }: Props) {

  return (
    <Box
      sx={{ display: 'flex' }}
      className='min-h-screen font-primary text-base animate-fade-in-slow'
    >
      <CssBaseline />

      <Box
        className='basis-1/2 bg-blue-950 relative overflow-hidden'
      >
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
          <div className="absolute animate-expand rounded-full bg-primary bg-opacity-15 w-[300px] h-[300px]"></div>
          <div className="absolute animate-expand rounded-full bg-primary bg-opacity-10 w-[500px] h-[500px]"></div>
          <div className="absolute animate-expand rounded-full bg-primary bg-opacity-5 w-[800px] h-[800px]"></div>
        </div>
        <div className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AuthCarousel
            images={images}
            imgClassName="w-[448px] h-[252px]"
            className="max-w-[750px]"
          />
        </div>
      </Box>

      <Box className='relative basis-1/2 bg-bg-primary-light dark:bg-bg-primary-dark text-gray-800 dark:text-white'>
        <Outlet />
        <Box
          className='absolute top-2 right-2 flex gap-2'
        >
          <IconButton
            color='inherit'
            className='hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark transition-all duration-300 ease-in-out'
            onClick={toggleMode}
          >
            {
              mode === 'dark'
              ?
              <Sun strokeWidth={1.5}/>
              :
              <Moon strokeWidth={1.5}/>
            }
          </IconButton>

          <LanguageSelector />

        </Box>
      </Box>

    </Box>
  );
}
