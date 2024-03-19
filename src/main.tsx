import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@/shared/base.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "@/entities/theme";
import { appRouter } from "@/app/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <RouterProvider router={appRouter()} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
