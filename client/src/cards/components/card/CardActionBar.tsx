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
import useCards from "../../hooks/useCards";
type Props = {
  onDelete: (id: string) => void;
  onLike: () => void;
  card: CardInterface;
};
const CardActionBar: React.FC<Props> = ({ onDelete, card, onLike }) => {
  const [isDialogOpen, setDialog] = useState(false);

  const { handleLikeCard } = useCards();
  const { user_id, _id, likes } = card;
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLiked, setLike] = useState(() => {
    if (!user) return false;
    return !!likes.find((id) => id === user._id);
  });
  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };
  const handleDeleteCard = () => {
    handleDialog();
    onDelete(_id);
  };
  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeCard(_id);
    onLike();
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
            <IconButton
              color={isLiked ? "error" : "inherit"}
              onClick={() => handleLike()}
              aria-label="add to favorites"
            >
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
