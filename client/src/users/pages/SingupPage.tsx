import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/Joi/signupSchema";
import Container from "@mui/material/Container";
import UserForm from "../components/UserForm";
import useHandleUser from "../hooks/useHandleUser";

const SignupPage = () => {
  const { user } = useUser();
  const { handleSignup } = useHandleUser();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title="register user"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
        errors={value.errors}
        setData={rest.setData}
      />
    </Container>
  );
};

export default SignupPage;
