import React from "react";
import CardInterface from "../../interface/CardInterface";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Box, CardHeader } from "@mui/material";
import CardBodyRow from "./CardBodyRow";

type Props = { card: CardInterface };

const CardBody: React.FC<Props> = ({ card }) => {
  return (
    <CardContent sx={{ pb: 1 }}>
      <CardHeader
        title={card.title}
        subheader={card.subtitle}
        sx={{ p: 0, mb: 1 }}
      />

      <Divider />
      <Box mt={1}>
        <CardBodyRow card={{ title: "phone:", content: card.phone }} />
        <CardBodyRow
          card={{
            title: "address:",
            content: `${card.address.city} ${card.address.street}  ${card.address.houseNumber}`,
          }}
        />
        <CardBodyRow
          card={{ title: "cardNumber:", content: String(card.bizNumber) }}
        />
      </Box>
    </CardContent>
  );
};
export default CardBody;
