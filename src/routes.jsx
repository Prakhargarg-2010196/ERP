import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthLayout } from "./layouts/auth-layout";
import { ChakraProvider } from "@chakra-ui/react";
import { HomeLayout } from "./layouts/home-layout";
import Login from "./domain/Auth/login/login";
import SignUp from "./domain/Auth/sign-up/sign-up";
import ThemeContext from "./context/theme-context";
import { themes } from "./styles/Theme";
import { useState } from "react";

const RouteComponent = () => {
  const [theme, setTheme] = useState(themes["theme-student"]);
  function handleThemeChange(currentTheme) {
    setTheme(currentTheme);
  }
  return (
    <Router>
      <ChakraProvider>
        <ThemeContext.Provider value={theme}>
          <Routes>
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
          </Routes>
        </ThemeContext.Provider>
      </ChakraProvider>
    </Router>
  );
};
export default RouteComponent;
