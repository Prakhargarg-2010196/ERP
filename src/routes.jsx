import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { AuthLayout } from "./layouts/auth-layout";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyled from "./styles/GlobalStyle";
import { HomeLayout } from "./layouts/home-layout";
import Login from "./domain/Auth/login/login";
import OtpScreen from "./domain/Auth/sign-up/utils/otp/otpscreen";
import SignUp from "./domain/Auth/sign-up/sign-up";
import ThemeContext from "./context/theme-context";
import { themes } from "./styles/Theme";
import { useState } from "react";

const RouteComponent = () => {
  const [theme, setTheme] = useState(themes["theme-student"]);
  function handleThemeChange(currentTheme) {
    setTheme(currentTheme);
  }
  const location = useLocation();
  return (
    <>
      <ChakraProvider>
        <ThemeContext.Provider value={theme}>
          <GlobalStyled />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route
                path="/logIn"
                exact
                element={
                  <AuthLayout navLink={"/signUp"} navText={"SignUp"}>
                    <Login />
                  </AuthLayout>
                }
              />
              <Route
                path="/"
                exact
                element={
                  <HomeLayout
                    onThemeChange={(theme) => {
                      handleThemeChange(theme);
                    }}
                    navText={["teacher", "student"]}
                  ></HomeLayout>
                }
              />
              <Route
                path="/signUp"
                exact
                element={
                  <AuthLayout navLink={"/login"} navText={"Login"}>
                    <SignUp />
                  </AuthLayout>
                }
              />
              <Route
                path="/otpscreen"
                exact
                element={
                  <AuthLayout navLink={""} navText={""}>
                    <OtpScreen />
                  </AuthLayout>
                }
              />
            </Routes>
          </AnimatePresence>
        </ThemeContext.Provider>
      </ChakraProvider>
    </>
  );
};
export default RouteComponent;
