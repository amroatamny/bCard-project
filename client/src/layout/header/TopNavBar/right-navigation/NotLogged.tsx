import React from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="Signup" to={ROUTES.SINGUP} />
      {/* <Button color="inherit">
        <Typography>Signup</Typography>
      </Button> */}
      <NavItem label="Login" to={ROUTES.LOGIN} />
      {/* <Button color="inherit">
        <Typography>Login</Typography>
      </Button> */}
    </Box>
  );
};

export default NotLogged;
