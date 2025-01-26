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
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Blog from "./Pages/Blog";

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
          <Navbar count={count}/>
          <Shop onClick={handleCartCount}/>
          <Footer/>
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Notification />
          <Navbar count={count}/>
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
          <Navbar count={count}/>
          <Contact />
          <Footer/>
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Notification />
          <Navbar count={count}/>
          <SignUp/>
          <Footer/>
        </>
      ),
    },
    {
      path: "/signin",
      element: (
        <>
          <Notification />
          <Navbar count={count}/>
          <SignIn/>
          <Footer/>
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <Notification />
          <Navbar count={count}/>
          <Blog/>
          <Footer/>
        </>
      ),
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
