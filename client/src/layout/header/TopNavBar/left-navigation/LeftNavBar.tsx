import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="about" to={ROUTES.ABOUT} />

        {user && <NavItem label="My Cards" to={ROUTES.MY_CARDS} />}
        {user && user.isBusiness && (
          <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
        )}
        {user && user.isAdmin && (
          <NavItem label="Sandbox" to={ROUTES.SANDBOX} />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
