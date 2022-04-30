import { Button as Btn, Container, Form, Heading } from "../auth-common-css";
import React, { useState } from "react";

import { Checkbox } from "@chakra-ui/react";
import { Formik } from "formik";
import InputField from "../../../components/Input/input-field";
import { NavLink } from "react-router-dom";
import ShowPass from "../utils/show-password";
import signUpSchema from "../utils/auth-validation/schema/signup-schema";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={signUpSchema}
      validateOnBlur
    >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Heading style={{ "--fontSize": "2vw" }}>
            Get Started To
            <span style={{ color: "yellow", fontWeight: 600 }}>
              {" "}
              Edumarshal
            </span>
          </Heading>
          <Heading
            style={{ "--fontSize": "4vw", color: "#3EB0E1", fontWeight: "600" }}
          >
            Sign Up
          </Heading>
          <InputField
            inputGroupProps={{ "--align": "center" }}
            name={"username"}
            type={"text"}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Student/Teacher Number"}
            id={"username"}
          />

          <InputField
            inputGroupProps={{ "--align": "center" }}
            labelProps={"email"}
            name={"email"}
            type={"email"}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Email"}
            id={"email"}
          />

          <InputField
            inputGroupProps={{ "--align": "center", "--pos": "relative" }}
            labelProps={"password"}
            name={"password"}
            type={showPassword ? "password" : "text"}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Password"}
            id={"password"}
            style={{ "--z": "1", "--pos": "relative" }}
          >
            <ShowPass
              showPassword={showPassword}
              handleClickPassword={handleClickPassword}
            />
          </InputField>
          <InputField
            inputGroupProps={{ "--align": "center", "--pos": "relative" }}
            labelProps={"confirmPassword"}
            name={"confirmPassword"}
            type={showConfirmPassword ? "password" : "text"}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Confirm Password"}
            id={"confirmPassword"}
            style={{ "--z": "1", "--pos": "relative" }}
          >
            <ShowPass
              showPassword={showConfirmPassword}
              handleClickPassword={handleClickConfirmPassword}
            ></ShowPass>
          </InputField>

          <Container style={{ "--justify": "space-between" }}>
            <Checkbox>Remember Me</Checkbox>
          </Container>
          <Btn type="submit" disabled={isSubmitting}>
            Login
          </Btn>
          <Container style={{ "--align": "center" }}>
            <Heading style={{ marginRight: "12px" }}>
              Already have an Account?
            </Heading>
            <Heading style={{ color: "yellow" }}>
              <NavLink to="/login" color="yellow">
                Login
              </NavLink>
            </Heading>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
export default SignUp;
