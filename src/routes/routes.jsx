import React from 'react'; // Add this import

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home';
import App from '../App';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import SingleNewsPage from '../pages/SingleNewsPage';
import NewsPage from '../pages/NewsPage';
import Footer from '../components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/newspage",
        element: <NewsPage/>,
      },
      {
        path: "/about",
        element: <About/>,
      },

      {
        path: "/newspage/singlenews/:id",
        element: <SingleNewsPage/>,
      },




    


      
      



    ]
  }
]);

export default router;
