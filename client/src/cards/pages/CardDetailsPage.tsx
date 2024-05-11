import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const { isLoading, error, card, handleGetCard } = useCards();

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  if (!isLoading && !card) return <p>no card found ...</p>;

  if (!isLoading && card)
    return (
      <Container>
        <PageHeader
          title="Business Details"
          subtitle="Here you can see details of the business"
        />
        <div>Details of card :{cardId}</div>
        <Card card={card} onDelete={console.log} onLike={console.log} />
      </Container>
    );
  return null;
};

export default CardDetailsPage;
