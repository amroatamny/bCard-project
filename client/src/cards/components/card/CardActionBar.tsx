import React from "react";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
type Props = {
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  cardId: string;
};
const CardActionBar: React.FC<Props> = ({ onDelete, onLike, cardId }) => {
  const handleCardEdit = () => {
    console.log(`you move to card edit no.${cardId}`);
  };
  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => onDelete(cardId)} aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <IconButton onClick={handleCardEdit} aria-label="edit">
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        <IconButton aria-label="phone">
          <LocalPhoneIcon />
        </IconButton>

        <IconButton
          onClick={() => onLike(cardId)}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
