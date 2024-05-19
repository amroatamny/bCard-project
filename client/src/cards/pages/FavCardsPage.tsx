import React, { useEffect, useCallback } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";

const FavCardsPage = () => {
  const { handleDeleteCard, handleGetFavCards, ...rest } = useCards();
  const { isLoading, error, filterCard } = rest;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetFavCards();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />

      <CardsFeedBack
        isLoading={isLoading}
        error={error}
        cards={filterCard}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;
