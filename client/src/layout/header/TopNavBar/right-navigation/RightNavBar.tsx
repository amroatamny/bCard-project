import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/SearchBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import ThemeProvider, { useTheme } from "../../../../provider/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";

const RightNavBar = () => {
  const { isDark, toggleDarkMpode } = useTheme();

  const { user } = useUser();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton onClick={toggleDarkMpode} sx={{ marginLeft: 1 }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged />}
      </Box>

      <MoreButton />
    </>
  );
};

export default RightNavBar;
