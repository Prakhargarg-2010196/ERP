import { Button, Heading } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/theme-context";
import { useContext } from "react";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <Heading style={{ ...theme.Globals }}>AKGEC</Heading>
        <Heading style={{ ...theme.CapitalHeadings }}>
          The official Edu-Marshal Page for AKGEC
        </Heading>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          style={{
            backgroundColor: theme.buttonBackgroundTwo,
            color: theme.colorTwo,
            width: "50%",
          }}
        >
          <NavLink to="/signUp">SignUp</NavLink>
        </Button>
        <Button
          style={{
            backgroundColor: theme.buttonBackground,
            color: theme.color,
            width: "50%",
          }}
        >
          <NavLink to="/Login">Login</NavLink>
        </Button>
      </div>
    </>
  );
}
