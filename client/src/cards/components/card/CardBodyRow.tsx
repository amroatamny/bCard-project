import React from "react";
import Typography from "@mui/material/Typography";
import CardBodyContent from "../../interface/CardbodyRowContent";
type Props = { card: CardBodyContent };

const CardBodyRow: React.FC<Props> = ({ card }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      <Typography fontWeight={700} component="span">
        {card.title}{" "}
      </Typography>
      {card.content}
    </Typography>
  );
};

export default CardBodyRow;
