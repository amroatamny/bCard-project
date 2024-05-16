import { AppBar, Box, Drawer, IconButton, List, Toolbar } from "@mui/material";
import React, { useState } from "react";
import NavItem from "../layout/components/NavItem";
import ROUTES, { SANDBOX_ROUTES_FATHER } from "../routes/routesModel";
import { Navigate, Outlet } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DrawerListItem from "./DrawerListItem";
import { useUser } from "../users/providers/UserProvider";
const SandboxMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useUser();
  if (!user || user.isAdmin) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { sm: "inline-flex", lg: "none" } }}
        >
          <ExpandMoreIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="COMPONENT"
              navigateTo={SANDBOX_ROUTES_FATHER.COMPONENT}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="CONTEXT"
              navigateTo={SANDBOX_ROUTES_FATHER.CONTEXT}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="CUSTOM"
              navigateTo={SANDBOX_ROUTES_FATHER.CUSTOM}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="EVENTS"
              navigateTo={SANDBOX_ROUTES_FATHER.EVENTS}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="FORM TEST "
              navigateTo={SANDBOX_ROUTES_FATHER.FORM_TEST}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="INTRODUCTION"
              navigateTo={SANDBOX_ROUTES_FATHER.INTRODUCTION}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="LIFESYCLE"
              navigateTo={SANDBOX_ROUTES_FATHER.LIFESYCLE}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="MEMOIZAITON"
              navigateTo={SANDBOX_ROUTES_FATHER.MEMOIZAITON}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="MUI SANDBOX"
              navigateTo={SANDBOX_ROUTES_FATHER.MUI_SANDBOX}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="NAVIGATION"
              navigateTo={SANDBOX_ROUTES_FATHER.NAVIGATION}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="PROPS"
              navigateTo={SANDBOX_ROUTES_FATHER.PROPS}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="USE STATE"
              navigateTo={SANDBOX_ROUTES_FATHER.USE_STATE}
              onClose={() => setOpen(false)}
              divider={false}
            />
          </List>
        </Drawer>

        <Box sx={{ display: { xs: "none", lg: "inline-flex" } }}>
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
            <NavItem
              label="context"
              to={SANDBOX_ROUTES_FATHER.CONTEXT}
              color="black"
            />
            <NavItem
              label="form"
              to={SANDBOX_ROUTES_FATHER.FORM_TEST}
              color="black"
            />
          </Toolbar>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};

export default SandboxMenu;
