import ThemeContext from "../context/theme-context";
import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
const GlobalStyle = createGlobalStyle`
*{
    color:white;
    background:${(props) => props.theme.background};
}
`;
const GlobalStyled = (props) => {
  const value = useContext(ThemeContext);
  return <GlobalStyle theme={value}></GlobalStyle>;
};

export default GlobalStyled;
