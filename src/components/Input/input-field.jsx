import { ErrorMessage } from "formik";
import ErrorTooltip from "../../domain/Auth/utils/auth-validation/error-tooltip";
import { Label } from "./label";
import style from "styled-components";
const Input = style.input`
width:inherit;
height: 60px;
border-radius: 6px;
background: transparent;
border:solid white 1px;
padding: 0 8px;
margin: 15px 0px;
z-index:var(--z);
position:var(--pos);
`;
const InputGroup = style.div`
display:flex;
gap:var(--gap);
align-items:var(--align);
justify-content:var(--justify);
flex-direction:var(--direction);
position:var(--pos);

`;
const InputField = ({ children, name, inputGroupProps, ...props }) => {
  return (
    <>
      <InputGroup style={{ ...inputGroupProps }}>
        <Label htmlFor={props.labelProps}>
          <Input {...{ name, ...props }} />
        </Label>
        {children}
        <ErrorMessage name={name} component={ErrorTooltip}></ErrorMessage>
      </InputGroup>
    </>
  );
};
export default InputField;
