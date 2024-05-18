import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import initialCreateCardObject from "../helpers/initialForms/initialCreateCardObject";
import cardEditSchema from "../models/Joi/cardEditSchema";
import ROUTES from "../../routes/routesModel";
import mapCardToModel from "../helpers/normalizations/mapCardToModel";
import { Container } from "@mui/material";
import CreateCardForm from "../components/CreateCardForm";
import { CardMapToModelType } from "../models/types/cardTypes";
type data = any;
const EditCardPage = () => {
  const { handleUpdateCard, handleGetCard, card } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { value, ...rest } = useForm(
    initialCreateCardObject,
    cardEditSchema,
    handleUpdateCard
  );
  const { data, errors } = value;
  const { handleChange, handleReset, onSubmit, setData, validateForm } = rest;

  useEffect(() => {
    if (cardId)
      handleGetCard(cardId).then((data) => {
        if (user?._id !== data!.user_id) return navigate(ROUTES.ROOT);
        const modeledCard = mapCardToModel(data!);
        setData(modeledCard);
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
      <CreateCardForm
        title="edit card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleChange}
        data={data}
      />
    </Container>
  );
};

export default EditCardPage;
