import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardBar from "./CardActionBar";
import CardInterface from "../../interface/CardInterface";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onEdit: (id: string) => void;
};
const Card: React.FC<Props> = ({ card, onDelete, onLike, onEdit }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardHead image={card.image} />
      <CardBody card={card} />
      <CardBar
        cardId={card._id}
        onEdit={onEdit}
        onLike={onLike}
        onDelete={onDelete}
      />
    </MuiCard>
  );
};

export default Card;
