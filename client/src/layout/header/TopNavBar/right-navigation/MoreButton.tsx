import React from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { func } from "prop-types";

const MoreButton = () => {
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

MoreButton.propTypes = {
  onClick: func.isRequired,
};

export default MoreButton;
