import React from "react";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";

const CardBar = () => {
  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        <IconButton aria-label="phone">
          <LocalPhoneIcon />
        </IconButton>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardBar;
