import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import createBrowserRouter, RouterProvider to give routes or link pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apartments from "./pages/apartments/Apartments";
import Contactus from "./pages/contactus/Contactus";
import Houses from "./pages/houses/Houses";
import Home from "./pages/home/Home";
import Sitemap from "./pages/sitemap/Sitemap";
import SaleProperty from "./pages/saleProperty/SaleProperty";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
//function to assign links to pages
const router = createBrowserRouter([
  {
    // this is code for the very first page when application will start using npm start
    path: "/",
    element: <App />,
  },
  {
    path: "/appartmentspage",
    element: <Apartments />,
  },
  {
    path: "/housespage",
    element: <Houses />,
  },
  {
    path: "/salepropertypage",
    element: <SaleProperty />,
  },
  {
    path: "/sitemappage",
    element: <Sitemap />,
  },
  {
    path: "/contactuspage",
    element: <Contactus />,
  },
  {
    path: "/loginpage",
    element: <Login />,
  },
  {
    path: "/registerpage",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// replace <App/> with RouterProvider router={router}
root.render(<RouterProvider router={router} />);
