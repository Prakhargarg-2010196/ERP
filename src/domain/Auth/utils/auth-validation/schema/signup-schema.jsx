import * as Yup from "yup";
export default function signUpSchema() {
  return Yup.object().shape({
    username: Yup.string()
      .required("No username provided")
      .max(7, "Username must be at most 7 characters long.")
      .min(7, "Username must be at most 7 characters long.")
      .matches(/^\d+$/, "Student Teacher number must be a number"),

    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password must be at least 8 characters long.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
      .matches(/.*[A-Z].*/, "Password must contain at least one upper case.")
      .matches(/[*@!#%&()^~{}]+/, "Password must contain a special character"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("No password provided."),
  });
}
