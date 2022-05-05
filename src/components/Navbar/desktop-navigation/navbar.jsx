import { NavLink } from "react-router-dom";
import ThemeContext from "../../../context/theme-context";
import logo from "../../../assets/logo.svg";
import style from "styled-components";
import { useContext } from "react";
const DesktopNavigation = style.ul`
  display:flex;
  list-style:none;
  gap:2em;
  justify-content:end;
  align-items:center;
  li{
    text-decoration:none;
    color:white;
    margin:12px;
    };
   

`;
const NavWrapper = style.nav`
  display: flex;
  min-height:5vh;
  height:10vh;
  justify-content:space-between;
  box-shadow:0 5px 2px -4px lightblue;
  background:var(--bg);
  
  position:relative;
  `;
const Container = style.div`
display:flex;
gap:var(--gap);
align-items:var(--align);
justify-content:var(--justify);
flex-direction:var(--direction);

`;

const Navbar = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <NavWrapper style={{ "--bg": `${theme.background}` }}>
      <Container
        style={{
          "--gap": "10px",
          "--align": "center",
        }}
      >
        <NavLink to="/">
          <img src={logo} style={{ borderRadius: "50%" }} alt="logo" />
        </NavLink>
      </Container>
      <DesktopNavigation>{props.children}</DesktopNavigation>
    </NavWrapper>
  );
};
export default Navbar;
