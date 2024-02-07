import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource-variable/karla";
import "@fontsource-variable/montserrat";
import "@fontsource/source-sans-pro";
import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
