import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const ComponentMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="template"
            to={SANDBOX_ROUTES_SONS.TEMPLATE}
            color="black"
          />
          <NavItem label="logic" to={SANDBOX_ROUTES_SONS.LOGIC} color="black" />
          <NavItem
            label="styles"
            to={SANDBOX_ROUTES_SONS.STYLES}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default ComponentMenu;
