import React from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import initialCreateCardObject from "../helpers/initialForms/initialCreateCardObject";
import cardSchema from "../models/Joi/cardSchema";
import Container from "@mui/material/Container";
import CreateCardForm from "../components/CreateCardForm";

const CreateCardPage = () => {
  const { HandleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCreateCardObject,
    cardSchema,
    HandleCreateCard
  );
  const { data, errors } = value;
  const { handleChange, handleReset, onSubmit, validateForm } = rest;

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container>
      <CreateCardForm
        title="create business card"
        data={data}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleChange}
        onReset={handleReset}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default CreateCardPage;
