// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Cart from './components/cart';
import Home from './components/Home';
import Error from './components/error';
import Singleproduct from './components/Singleproduct';
import './App.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      
      {
        path:"/",
        element:<Home/>
      },
      { path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path:'singleproduct/:id',
        element:<Singleproduct/>
      },
      {path:'cart',
        element:<Cart/>,

      },
     
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
