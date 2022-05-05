import { Button as Btn, Container, Form, Heading } from "../auth-common-css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Checkbox } from "@chakra-ui/react";
import { Formik } from "formik";
import InputField from "../../../components/Input/input-field";
import ShowPass from "../utils/show-password";
import axios from "axios";
import signUpSchema from "../utils/auth-validation/schema/signup-schema";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const baseURL =
    "https://b155-2401-4900-b85-bd80-a84c-602e-4b72-21b2.ngrok.io/";

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ["student"],
      }}
      onSubmit={(values) => {
        console.log(values);
        axios.post(
          `${baseURL}api/auth/signup
        `,
          values
        );
        navigate("/otpscreen",{state: values});
      }}
      validationSchema={signUpSchema}
      validateOnBlur
    >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit();
          }}
        >
          <Heading style={{ "--fontSize": "2vw" }}>
            Get Started To
            <span style={{ color: "yellow", fontWeight: 600 }}>Edumarshal</span>
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
