import React, { useState } from "react";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop";
import ErrorPage from "./Pages/ErrorPage";
import Notification from "./Components/Notification";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Footer from "./Components/Footer"

const App = () => {
  const[count,setCount] = useState(0)

  const handleCartCount = ()=>{
    setCount((prev)=> prev + 1)
  }
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Notification />
          <Navbar count={count}/>
          <Home onClick={handleCartCount}/>
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
