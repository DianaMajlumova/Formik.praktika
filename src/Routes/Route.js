import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

export default router