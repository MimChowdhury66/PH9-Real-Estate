import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import ErrorPage from './pages/EorrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
import { HelmetProvider } from 'react-helmet-async';
import Services from './pages/Services/Services';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/property/:id',
        element: <PropertyDetails></PropertyDetails>,
        loader: () => fetch('/property.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/service',
        element: <Services></Services>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />

    </HelmetProvider>
  </React.StrictMode>,
)
