import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const ComponentMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="template"
            to={SANDBOX_ROUTES.TEMPLATE}
            color="black"
          />
          <NavItem label="logic" to={SANDBOX_ROUTES.LOGIC} color="black" />
          <NavItem label="styles" to={SANDBOX_ROUTES.STYLES} color="black" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default ComponentMenu;
