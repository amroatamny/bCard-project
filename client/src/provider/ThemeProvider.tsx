import React, {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  useMemo,
  useCallback,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

type ContextArgs = {
  isDark: boolean;
  toggleDarkMpode: () => void;
};

const ThemeContext = React.createContext<null | ContextArgs>(null);

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isDark, setDark] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const toggleDarkMpode = useCallback(() => {
    setDark((prev) => !prev);
  }, [isDark]);

  const value = useMemo(() => {
    return { isDark, toggleDarkMpode };
  }, [isDark]);

  const Theme = createTheme({});

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default ThemeProvider;
