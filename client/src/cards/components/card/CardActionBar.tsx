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
  onEdit: (id: string) => void;
};
const CardBar: React.FC<Props> = ({ onDelete, onLike, cardId, onEdit }) => {
  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => onDelete(cardId)} aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <IconButton onClick={() => onEdit(cardId)} aria-label="edit">
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

export default CardBar;
