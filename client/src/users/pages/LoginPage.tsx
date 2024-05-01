import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const LoginPage = () => {
  const user = false;
  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container>
      <PageHeader title="Login" subtitle="Here you login" />
    </Container>
  );
};

export default LoginPage;
