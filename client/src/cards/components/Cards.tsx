import React from "react";
import Card from "./card/Card";
import CardInterface from "../interface/CardInterface";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
type Props = { cards: CardInterface[] };

const Cards: React.FC<Props> = ({ cards }) => {
  const handleCardDelete = (_id: string) => {
    console.log(`you delete card no.${_id}`);
  };
  const handleCardLike = (_id: string) => {
    console.log(`you like card no.${_id}`);
  };
  const handleCardEdit = (_id: string) => {
    console.log(`you edit card no.${_id}`);
  };

  if (!cards.length) return <Typography>sorry dude</Typography>;
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card
            onEdit={handleCardEdit}
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
