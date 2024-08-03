import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "../layout/Layout";

function App() {
  const [mode, setMode] = useState<any>("light");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    document.documentElement.classList.toggle('dark');
  };

  const darkTheme = createTheme({
    typography: {
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    },
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout
        mode={mode}
        toggleMode={toggleTheme}
      />
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
