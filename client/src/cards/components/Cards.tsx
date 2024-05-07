import React from "react";
import Card from "./card/Card";
import CardInterface from "../interface/CardInterface";
import Grid from "@mui/material/Grid";
type Props = { cards: CardInterface[] };

const Cards: React.FC<Props> = ({ cards }) => {
  const handleCardDelete = (_id: string) => {
    console.log(`you delete card no.${_id}`);
  };
  const handleCardLike = (_id: string) => {
    console.log(`you like card no.${_id}`);
  };

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card
            card={card}
            onDelete={handleCardDelete}
            onLike={handleCardLike}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
