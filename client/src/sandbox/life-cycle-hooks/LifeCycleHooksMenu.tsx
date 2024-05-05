import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Outlet } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DrawerListItem from "../DrawerListItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES_SONS } from "../../routes/routesModel";

const LifeCycleHooks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <ExpandMoreIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="Initial"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_INITIAL}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useState"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_USE_STATE}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="mount"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_MOUNT}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="update"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_UPDATE}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="will Unmount"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_UN_MOUNT}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="No Dependencies"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_NO_DEPENDENCIES}
              onClose={() => setOpen(false)}
              divider={false}
            />
            <DrawerListItem
              label="exe"
              navigateTo={SANDBOX_ROUTES_SONS.LIFESYCLE_LIFE_CYCLE}
              onClose={() => setOpen(false)}
              divider={false}
            />
          </List>
        </Drawer>

        <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
          <NavItem
            label="Initial"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_INITIAL}
            color="black"
          />
          <NavItem
            label="useState"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_USE_STATE}
            color="black"
          />
          <NavItem
            label="mount"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_MOUNT}
            color="black"
          />
          <NavItem
            label="update"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_UPDATE}
            color="black"
          />
          <NavItem
            label="will unmount"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_UN_MOUNT}
            color="black"
          />
          <NavItem
            label="no dependencies"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_NO_DEPENDENCIES}
            color="black"
          />
          <NavItem
            label="exe"
            to={SANDBOX_ROUTES_SONS.LIFESYCLE_LIFE_CYCLE}
            color="black"
          />
        </Box>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default LifeCycleHooks;
