import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const IntroductionMenuPage = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="bable"
            to={SANDBOX_ROUTES_SONS.INTRODUCTION_BABLE}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default IntroductionMenuPage;
