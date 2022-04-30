import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@chakra-ui/react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import style from "styled-components";

const ErrorIcon = style(FontAwesomeIcon)`
color:red;
margin-left:12px;
`;

export default function ErrorTooltip(props) {
  return (
    <Tooltip label={props.children} closeOnMouseDown>
      <span>
        <ErrorIcon icon={faCircleExclamation} size={"lg"}></ErrorIcon>
      </span>
    </Tooltip>
  );
}
