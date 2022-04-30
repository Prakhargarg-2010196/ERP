import react from "react";
// Theme json object for defining themes.
import { themes } from "../styles/Theme";

// Creates a context using create Context
const ThemeContext = react.createContext(themes["theme-student"]);
export default ThemeContext;
ThemeContext.displayName = "Theme";
