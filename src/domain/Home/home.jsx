import { Button, Heading } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/theme-context";
import {motion} from "framer-motion";
import { useContext } from "react";

export default function Home() {
  const theme = useContext(ThemeContext);
  const ButtonVariants={
    hover:{
      transition:{
        duration:1,
        yoyo:10,
        stiffness:100
      }
    }
  }
  return (
    <>
    <motion.div
        initial={{opacity:0}}
        
        animate={{opacity:1}}
        transition={{duration:1.4}}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <motion.h1 initial={{scale:0}}  
        animate={{scale:2.4}}
        transition={{duration:1.3 ,stiffness:500}}
        >
          AKGEC
          </motion.h1>
        <Heading>
          The official Edu-Marshal Page for AKGEC
        </Heading>
      </motion.div>
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
        <motion.button
          variants={ButtonVariants}
          whileHover="hover"
          style={{
            backgroundColor:"white",
            color: "black",
            width: "50%",
            borderRadius:"5px"
          }}
        >
          <NavLink to="/Login">Login</NavLink>
        </motion.button>
      </div>
    </>
      
    
  );
}
