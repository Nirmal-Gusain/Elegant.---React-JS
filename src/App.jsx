import React from "react";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop";
import ErrorPage from "./Components/ErrorPage";
import Notification from "./Components/Notification";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Footer from "./Components/Footer"

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Notification />
          <Navbar />
          <Home />
          <Footer/>,
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Notification />
          <Navbar />
          <Shop />
          <Footer/>
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Notification />
          <Navbar />
          <Product/>
          <Footer/>
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Notification />
          <Navbar />
          <Contact />
          <Footer/>
        </>
      ),
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
