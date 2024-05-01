import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const SingupPage = () => {
  const user = false;
  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container>
      <PageHeader title="singup" subtitle="Here you singup" />
    </Container>
  );
};

export default SingupPage;
