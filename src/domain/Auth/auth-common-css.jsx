import style from "styled-components";

export const Button = style.button`
  width: 100%;
  padding:10px;
  border-radius:5px;
  margin:1em 0;
  background-color:#722FE1;
  `;
export const Container = style.div`
display:flex;
gap:var(--gap);
align-items:var(--align);
justify-content:var(--justify);
flex-direction:var(--direction);
position:var(--pos);

`;
export const Form = style.form`
    display:flex;
    flex-direction:column;
    padding:12px;
    width:60%;

`;

export const Heading = style.span`
 font-size:var(--fontSize);
 color:white;
 font-family:Playfair Display;
`;
