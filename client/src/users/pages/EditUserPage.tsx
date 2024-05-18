// import React from "react";
// import { useUser } from "../providers/UserProvider";
// import { Navigate } from "react-router-dom";
// import ROUTES from "../../routes/routesModel";

// const EditUserPage = () => {
//   const { user } = useUser();
//   if (!user) return <Navigate replace to={ROUTES.ROOT} />;
//   return <div>EditUserPage</div>;
// };

// export default EditUserPage;
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";

import { useUser } from "../../users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";

import useHandleUser from "../hooks/useHandleUser";
import signupSchema from "../models/Joi/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import UserForm from "../components/UserForm";

const EditUserPage = () => {
  const { user } = useUser();
  const { userId } = useParams();
  const { handleGetUser, handleUpdateUser } = useHandleUser();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleUpdateUser
  );

  const { data, errors } = value;
  const { handleChange, handleReset, onSubmit, setData, validateForm } = rest;

  useEffect(() => {
    if (userId)
      handleGetUser(userId).then((userFromServer) => {
        if (user?._id !== userId) return navigate(ROUTES.FAV_CARDS);
        const modeledUser = mapUserToModel(userFromServer!);

        setData(modeledUser);
      });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

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
        title="edit user"
        onSubmit={onSubmit}
        onReset={handleReset}
        onFormChange={validateForm}
        onInputChange={handleChange}
        data={data}
        errors={errors}
        setData={setData}
      />
    </Container>
  );
};

export default EditUserPage;
