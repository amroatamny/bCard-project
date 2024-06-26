import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import CardInterface from "../../interface/CardInterface";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};
const Card: React.FC<Props> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETATLS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar card={card} onLike={onLike} onDelete={onDelete} />{" "}
    </MuiCard>
  );
};

export default Card;
