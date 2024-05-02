import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const EventsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="event"
            to={SANDBOX_ROUTES_SONS.EVENT_RAISING_EVENT}
            color="black"
          />
          <NavItem
            label="onClick"
            to={SANDBOX_ROUTES_SONS.EVENT_ONCLICK}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default EventsMenu;
