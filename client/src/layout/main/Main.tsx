import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";

type Props = {
  children: ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: "#e5eaf5",
      }}
    >
      {children}
    </Paper>
  );
};

export default Main;
