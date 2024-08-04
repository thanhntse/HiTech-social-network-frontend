import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import AuthCarousel from "../components/carousel/AuthCarousel";
import images from "../constant/auth-img";

type Props = {
}

export default function AuthLayout({}: Props) {

  return (
    <Box
      sx={{ display: 'flex' }}
      className='min-h-screen font-primary text-base animate-fade-in'
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

      <Box className='basis-1/2 bg-bg-primary-light dark:bg-bg-primary-dark text-gray-800 dark:text-white'>
        <Outlet />
      </Box>

    </Box>
  );
}
