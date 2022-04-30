import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/desktop-navigation/navbar";
import ThemeContext from "../context/theme-context";
import styled from "styled-components";
import { useContext } from "react";

const Layout = styled.div`
  max-height: 130vh;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundColor);
  color: white;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
export const AuthLayout = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Navbar>
        <li>
          <NavLink to={props.navLink}>{props.navText}</NavLink>
        </li>
      </Navbar>
      <Layout
        style={{
          "--backgroundColor": `${theme.background}`,
        }}
      >
        <Wrapper>{props.children}</Wrapper>
      </Layout>
    </>
  );
};
