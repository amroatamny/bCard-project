import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Fab } from "@mui/material";
import CardsFeedBack from "../components/CardsFeedBack";
import AddIcon from "@mui/icons-material/Add";

const MyCardsPage = () => {
  const { user } = useUser();
  const { handleGetMyCards, handleDeleteCard, isLoading, cards, error } =
    useCards();

  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    console.log(cardId);
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      />

      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedBack
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default MyCardsPage;
