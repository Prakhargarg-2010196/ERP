import { Button as Btn, Container, Form, Heading } from "../../../auth-common-css";

import { Checkbox } from "@chakra-ui/react";
import { Formik } from "formik";
import InputField from "../../../../../components/Input/input-field";
import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OtpScreen = () => {
  
  const baseURL =
    "https://b155-2401-4900-b85-bd80-a84c-602e-4b72-21b2.ngrok.io/";

 
  const location = useLocation();
  const locationState=location.state;
  return (
    <Formik
      initialValues={{
       otp:"",...locationState,
      }}
      onSubmit={(values) => {
        console.log(values);
        axios.post(
          `${baseURL}api/auth/verifySignup

        `,
          values
        );
      }}
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
            Enter Otp
        {console.log(locationState)}
          </Heading>
          <InputField
            inputGroupProps={{ "--align": "center" }}
            name={"otp"}
            type={"text"}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Enter Otp"}
            id={"otp"}
          />

          <Container style={{ "--justify": "space-between" }}>
            <Checkbox>Remember Me</Checkbox>
          </Container>
          <Btn type="submit" disabled={isSubmitting}>
            Submit Otp
          </Btn>
        </Form>
      )}
    </Formik>
  );
};
export default OtpScreen;
