import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const NavigationsMenuPage = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="app bar "
            to={SANDBOX_ROUTES_SONS.NAVIGATION_MUI_APP_BAR}
            color="black"
          />{" "}
          <NavItem
            label="bottom navigation "
            to={SANDBOX_ROUTES_SONS.NAVIGATION_MUI_BOTTOM_NAVIGATION}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavigationsMenuPage;
