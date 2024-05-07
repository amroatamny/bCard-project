import React from "react";
import "./App.css";
import Layout from "./layout/Layout";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import ThemeProvider from "./provider/ThemeProvider";
import { SnackbarProvider } from "./provider/SnackbarProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
