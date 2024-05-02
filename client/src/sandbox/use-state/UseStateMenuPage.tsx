import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const UseStateMenuPage = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="set post"
            to={SANDBOX_ROUTES_SONS.USE_STATE_SEET_POST}
            color="black"
          />
          <NavItem
            label="set posts"
            to={SANDBOX_ROUTES_SONS.USE_STATE_SET_POSTS}
            color="black"
          />{" "}
          <NavItem
            label="use state"
            to={SANDBOX_ROUTES_SONS.USE_STATE_USE_STATE}
            color="black"
          />{" "}
          <NavItem
            label="array of obj"
            to={SANDBOX_ROUTES_SONS.USE_STATE_ARRAY_OF_OBJ}
            color="black"
          />{" "}
          <NavItem
            label="complex obj"
            to={SANDBOX_ROUTES_SONS.USE_STATE_COMPLEX_OBJ}
            color="black"
          />{" "}
          <NavItem
            label="function"
            to={SANDBOX_ROUTES_SONS.USE_STATE_WITH_FUNCTION}
            color="black"
          />{" "}
          <NavItem
            label="object"
            to={SANDBOX_ROUTES_SONS.USE_STATE_WITH_OBJ}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default UseStateMenuPage;
