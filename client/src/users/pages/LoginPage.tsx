import React from "react";
import Container from "@mui/material/Container";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

import FormLink from "../../forms/components/FormLink";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/Joi/loginSchema";
import useHandleUser from "../hooks/useHandleUser";
// import handleLogin

const LoginPage = () => {
  // const user = false;

  // const handleLogin = (data: Data) => {
  //   console.log(data);
  //   handleReset();
  // };
  const {
    handleLogin,
    value: { user },
  } = useHandleUser();
  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  const { onSubmit, handleChange, handleReset, validateForm } = rest;

  const { data, errors } = value;
  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container
      sx={{
        // mt: 8,
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Login Page"
        onSubmit={onSubmit}
        onFormChange={validateForm}
        onReset={handleReset}
        spacing={1}
        styles={{ maxWidth: "450px" }}
      >
        <Input
          type="email"
          name="email"
          data={data}
          label="email"
          onInputChange={handleChange}
          error={errors.email}
          breakPoints={{ xs: 12, md: 6 }}
        />
        <Input
          type="password"
          name="password"
          data={data}
          label="password"
          onInputChange={handleChange}
          error={errors.password}
          breakPoints={{ xs: 12, md: 6 }}
        />
        <FormLink text="Did not registered yet ?" to={ROUTES.ROOT} />
      </Form>
    </Container>
  );
};

export default LoginPage;
