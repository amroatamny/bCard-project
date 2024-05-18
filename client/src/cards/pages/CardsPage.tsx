import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { Container } from "@mui/material";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import useHandleUser from "../../users/hooks/useHandleUser";
import { useUser } from "../../users/providers/UserProvider";

const CardsPage = () => {
  const { cards, error, isLoading, handleGetCards, handleDeleteCard } =
    useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };
  return (
    <Container>
      <PageHeader
        title="Cards page"
        subtitle="here you can find all type of business cards"
      />

      <CardsFeedBack
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
