import React from "react";
import CardInterface from "../interface/CardInterface";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import { Typography } from "@mui/material";

type Props = {
  isLoading: boolean;
  error: string | null;
  cards: CardInterface[] | null;
  onDelete?: (id: string) => void;
  onLike?: () => void;
};

const CardsFeedBack: React.FC<Props> = ({
  isLoading,
  error,
  cards,
  onDelete = (cardId) => console.log("you deleted card: " + cardId),
  onLike = () => {},
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length) return <Cards cards={cards} />;
  if (cards && !cards.length)
    return <Typography>there is no cards to show</Typography>;

  return null;
};

export default CardsFeedBack;
