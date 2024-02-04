import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages Importing
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import NavBar from "./components/NavBar.jsx";
import Contacts from "./pages/Contacts.jsx";
import Contact from "./components/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

// These is the Old Methods for using React Router v5

// TODO: New Methods  =  Uncommented Code
// TODO: Old Methods = commented Code

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<App />>
      <Route index element=<Home /> />
      <Route path="about" element=<About /> />
      <Route path="services" element=<Services /> />
      <Route path="contacts" element=<Contacts /> />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* TODO: Old Methods */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

    {/* TODO: New Methods */}

    <RouterProvider router={router} />
  </React.StrictMode>
);
