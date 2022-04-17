import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { CustomThemeProvider } from "./theme-context";
import { store } from "./store";

import App from "./components/app/app";

import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
