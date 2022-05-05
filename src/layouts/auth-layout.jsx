import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/desktop-navigation/navbar";
import { motion } from "framer-motion";
import styled from "styled-components";
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
  return (
    <motion.div
      initial={{ x: "0" }}
      exit={{ x: "-100vw", transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <Navbar>
        <li>
          <NavLink to={props.navLink}>{props.navText}</NavLink>
        </li>
      </Navbar>
      <Layout>
        <Wrapper>{props.children}</Wrapper>
      </Layout>
    </motion.div>
  );
};
