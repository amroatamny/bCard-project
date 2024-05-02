import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const MuiSandboxMenuPage = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="mui typography "
            to={SANDBOX_ROUTES_SONS.MUI_SANDBOX_MUI_TYPOGRAPHY}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default MuiSandboxMenuPage;
