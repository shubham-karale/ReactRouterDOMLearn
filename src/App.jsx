import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";

// Pages Importing
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import NavBar from "./components/NavBar.jsx";

/*
  TODO: <Routes>: A component from React Router v6 that wraps all Route components. It decides which Route to render based on the current URL.

The path prop in each Route component is used to specify the URL path that the Route should match.

When the URL changes, React Router renders the component associated with the matching Route.
*/

/*
  TODO: Outlet  =  Outlet means where you want to show the data or render the component itself
*/

function App() {
  return (
    <>
      <div className="">
        <header>
          <NavBar />
        </header>
        <h1 className="text-3xl text-white">Welcome to Router DOM Tutorial</h1>

        <main>
          <Outlet />
        </main>
      </div>
      {/* TODO: Old Routing Method Code */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes> */}
    </>
  );
}

export default App;
