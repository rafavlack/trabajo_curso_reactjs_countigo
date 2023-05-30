import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Trabajadores } from "./components/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/trabajadores",
        element: <Trabajadores />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);