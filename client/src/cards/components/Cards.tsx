import React from "react";
import Card from "./card/Card";
import CardInterface from "../interface/CardInterface";
import Grid from "@mui/material/Grid";
type Props = {
  cards: CardInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Cards: React.FC<Props> = ({ cards, onDelete }) => {
  const handleCardLike = () => {
    console.log(`you like card no.`);
  };

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card card={card} onDelete={onDelete} onLike={handleCardLike} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
