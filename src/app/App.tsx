import {  useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import '../config/i18n';
import MainLayout from "../layout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import NoPage from "../404/NoPage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgotPassword from "../auth/fogot-password/ForgotPassword";
import Email from "../auth/fogot-password/Email";
import Otp from "../auth/fogot-password/Otp";
import Activity from "../pages/activity/Activity";
import Friend from "../pages/friend/Friend";
import Group from "../pages/group/Group";
import Message from "../pages/message/Message";

function App() {
  const storedMode = localStorage.getItem('themeMode') || 'light';
  const [mode, setMode] = useState<any>(storedMode);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('themeMode', newMode);
  };

  const darkTheme = createTheme({
    typography: {
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    },
    palette: {
      mode: mode,
      primary: {
        main: '#2f65b9',
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route
            path="/"
            element={
              <MainLayout
                mode={mode}
                toggleMode={toggleTheme}
              />
            }
          >
            <Route path="/activity" element={<Activity />} />
            <Route path="/friend" element={<Friend />} />
            <Route path="/group" element={<Group />} />
            <Route path="/message" element={<Message />} />
          </Route>

          <Route
            path="/auth"
            element={
              <AuthLayout
                mode={mode}
                toggleMode={toggleTheme}
              />
            }
          >
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgotPassword" element={<ForgotPassword />}>
              <Route path="/auth/forgotPassword/email" element={<Email />} />
              <Route path="/auth/forgotPassword/otp" element={<Otp />} />
            </Route>
          </Route>

          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
  // return (
  //   <AuthProvider>
  //     <BrowserRouter>
  //       <ScrollToTop />
  //       <Routes>
  //         <Route path="/" element={<Layout />}>
  //           <Route index element={<Home/>} />
  //           <Route path="/partnerRegister" element={<PartnerRegister />} />
  //           <Route path="/customerRegister" element={<CustomerRegister />} />
  //           <Route path="/centreBooking/:id" element={<CentreBooking />} />
  //           <Route path="/aboutUs" element={<AboutUs />} />
  //           <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
  //           <Route path="/CustomerTerm" element={<CustomerTerm />} />
  //           <Route path="/PartnerTerm" element={<PartnerTerm />} />
  //           <Route path="/payment/result" element={<PaymentResult />} />
  //           <Route
  //             path="/myCentre/:id"
  //             element={
  //               <ManagerRoute>
  //                 <MyCentre />
  //               </ManagerRoute>
  //             }
  //           />
  //           <Route
  //             path="/admin"
  //             element={
  //               <AdminRoute>
  //                 <Admin />
  //               </AdminRoute>
  //             }
  //           />
  //           <Route
  //             path="/profile"
  //             element={
  //               <CustomerRoute>
  //                 <Profile />
  //               </CustomerRoute>
  //             }
  //           />
  //           <Route
  //             path="/bookingHistory"
  //             element={
  //               <CustomerRoute>
  //                 <BookingHistory />
  //               </CustomerRoute>
  //             }
  //           />
  //           <Route path="*" element={<NoPage />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </AuthProvider>
  // );
}

export default App;
