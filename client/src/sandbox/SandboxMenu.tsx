import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../layout/components/NavItem";
import { SANDBOX_ROUTES_FATHER } from "../routes/routesModel";
import { Outlet } from "react-router-dom";

const SandboxMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="components"
            to={SANDBOX_ROUTES_FATHER.COMPONENT}
            color="black"
          />{" "}
          <NavItem
            label="events"
            to={SANDBOX_ROUTES_FATHER.EVENTS}
            color="black"
          />{" "}
          <NavItem
            label="introduction"
            to={SANDBOX_ROUTES_FATHER.INTRODUCTION}
            color="black"
          />{" "}
          <NavItem
            label="mui_sandbox"
            to={SANDBOX_ROUTES_FATHER.MUI_SANDBOX}
            color="black"
          />{" "}
          <NavItem
            label="navigation"
            to={SANDBOX_ROUTES_FATHER.NAVIGATION}
            color="black"
          />{" "}
          <NavItem
            label="props"
            to={SANDBOX_ROUTES_FATHER.PROPS}
            color="black"
          />{" "}
          <NavItem
            label="use state"
            to={SANDBOX_ROUTES_FATHER.USE_STATE}
            color="black"
          />
          <NavItem
            label="lifeCycle Hooks"
            to={SANDBOX_ROUTES_FATHER.LIFESYCLE}
            color="black"
          />
          <NavItem
            label="custom hooks"
            to={SANDBOX_ROUTES_FATHER.CUSTOM}
            color="black"
          />
          <NavItem
            label="memoizaiton"
            to={SANDBOX_ROUTES_FATHER.MEMOIZAITON}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default SandboxMenu;
