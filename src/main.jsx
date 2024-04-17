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
import Services from './pages/Services/Services';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';



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
        element: <ProtectedRoute><PropertyDetails></PropertyDetails></ProtectedRoute>,
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
        element: <ProtectedRoute><Services></Services></ProtectedRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider> */}


    <HelmetProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />

      </FirebaseProvider>

    </HelmetProvider>


  </React.StrictMode>,
)
