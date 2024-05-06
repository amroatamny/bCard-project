import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../provider/ThemeProvider";

type Props = {
  children: ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: isDark ? "#333333" : "#e5eaf5",
      }}
    >
      {children}
    </Paper>
  );
};

export default Main;
