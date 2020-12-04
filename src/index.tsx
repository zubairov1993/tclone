import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";
import theme from "./theme";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
