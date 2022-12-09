import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layaout from "./components/Layaout";
import NewClient, { action as newClientAction } from "./pages/NewClient";
import Index, { loader as clientesLoader } from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditClient, { loader as editClientLoader } from "./pages/EditClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditClient />,
        loader: editClientLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
