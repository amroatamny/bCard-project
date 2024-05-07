import React, { useState } from "react";
import { SnackbarProvider, useSnack } from "../../provider/SnackbarProvider";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SnackExample = () => {
  const [message, setMessage] = useState("");
  const snack = useSnack();
  const fireSnack = () => {
    snack("success", message);
    setMessage("");
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
      }}
    >
      <InputBase
        onChange={(e) => setMessage(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Snack Message"
        inputProps={{ "aria-label": "search google maps" }}
        value={message}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={fireSnack}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default SnackExample;
