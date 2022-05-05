import { Button as Btn, Container, Form, Heading } from "../auth-common-css";
import React, { useState } from "react";

import { Checkbox } from "@chakra-ui/react";
import { Formik } from "formik";
import InputField from "../../../components/Input/input-field";
import { NavLink } from "react-router-dom";
import ShowPass from "../utils/show-password";
import axios from "axios";
import logInSchema from "../utils/auth-validation/schema/login-schema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const baseURL =
    "https://b155-2401-4900-b85-bd80-a84c-602e-4b72-21b2.ngrok.io/";

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        username: "",
      }}
      onSubmit={(values) => {
        axios.post(
          `${baseURL}api/auth/signin
        `,
          values
        );
        console.log(values);
      }}
      validationSchema={logInSchema}
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
            Welcome Back To
            <span style={{ color: "yellow", fontWeight: 600 }}>
              {" "}
              Edumarshal
            </span>
          </Heading>
          <Heading
            style={{ "--fontSize": "4vw", color: "#3EB0E1", fontWeight: "600" }}
          >
            Login
          </Heading>

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
          <Container style={{ "--justify": "space-between" }}>
            <Checkbox>Remember Me</Checkbox>
            <NavLink to="/forgotPassword">Forgot password?</NavLink>
          </Container>

          <Btn type="submit" disabled={isSubmitting}>
            Login
          </Btn>

          <Container style={{ "--align": "center", gap: "10px" }}>
            <span>Don't have an Account?</span>
            <span>
              <NavLink to="/signUp" color="yellow">
                Get Started
              </NavLink>
            </span>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
