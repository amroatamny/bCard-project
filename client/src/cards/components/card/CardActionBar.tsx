import React, { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";
import CardInterface from "../../interface/CardInterface";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
type Props = {
  onDelete: (id: string) => void;
  onLike: () => void;
  card: CardInterface;
};
const CardActionBar = ({ onDelete, onLike, card }: Props) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user_id, _id, likes } = card;
  const { user } = useUser();
  const navigate = useNavigate();

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };
  const handleDeleteCard = () => {
    handleDialog();
    onDelete(_id);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && user._id === user_id && (
            <IconButton
              onClick={() => handleDialog("open")}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          )}
          {user?._id === user_id && (
            <IconButton
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${_id}`)}
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton aria-label="phone">
            <LocalPhoneIcon />
          </IconButton>
          {user && (
            <IconButton onClick={() => onLike()} aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

export default CardActionBar;
