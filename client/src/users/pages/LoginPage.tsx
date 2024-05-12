import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Joi from "joi";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";

import Input from "../../forms/components/Input";
import { Button } from "@mui/material";

type Data = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const initialLoginForm = {
    email: "",
    password: "",
  };
  const loginSchema = {
    email: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
  };
  const handleLogin = (data: Data) => {
    console.log(data);
    handleReset();
  };
  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  const { onSubmit, handleChange, handleReset, validateForm } = rest;
  const { data, errors } = value;

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
      >
        <Input
          name="email"
          data={data}
          label="email"
          onInputChange={handleChange}
          error={errors.email}
          breakPoints={{ xs: 12, md: 6 }}
        />
        <Input
          name="password"
          data={data}
          label="password"
          onInputChange={handleChange}
          error={errors.password}
          breakPoints={{ xs: 12, md: 6 }}
        />
        <Button variant="text" onClick={() => navigate(ROUTES.SINGUP)}>
          regester...
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
