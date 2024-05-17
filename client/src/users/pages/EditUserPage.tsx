import React from "react";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const EditUserPage = () => {
  const { user } = useUser();
  if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  return <div>EditUserPage</div>;
};

export default EditUserPage;
