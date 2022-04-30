import { Button } from "@chakra-ui/react";
import Home from "../domain/Home/home";
import Navbar from "../components/Navbar/desktop-navigation/navbar";
import ThemeContext from "../context/theme-context";
import style from "styled-components";
import { themes } from "../styles/Theme";
import { useContext } from "react";
const Layout = style.div`
  max-height: 150vh;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const Wrapper = style.div`
  width: 50%;
  @media (max-width: 797px) {
    width: 100%;
    margin: 0 20px;
  }
`;

export const HomeLayout = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Navbar>
        <li>
          <Button
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
            }}
            onClick={() => props.onThemeChange(themes["theme-teacher"])}
          >
            {props.navText[0]}
          </Button>
        </li>
        <li>
          <Button
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              userSelect: "none",
            }}
            onClick={() => props.onThemeChange(themes["theme-student"])}
          >
            {props.navText[1]}
          </Button>
        </li>
      </Navbar>
      <Layout theme={theme}>
        <Wrapper>
          <Home></Home>
          {props.children}
        </Wrapper>
      </Layout>
    </>
  );
};
