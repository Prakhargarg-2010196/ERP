import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye as faEyeRegular } from "@fortawesome/free-regular-svg-icons";
import style from "styled-components";

const Eye = style(FontAwesomeIcon)`
 color:#3EB0E1;
 position:absolute;
 z-index:2;
 right:40px;
  
`;
const ShowPass = ({ showPassword, handleClickPassword }) => {
  return showPassword ? (
    <Eye icon={faEyeRegular} size={"lg"} onClick={handleClickPassword} />
  ) : (
    <Eye icon={faEye} size={"lg"} onClick={handleClickPassword} />
  );
};
export default ShowPass;
