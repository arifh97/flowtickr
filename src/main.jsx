import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/scss/style.scss'

import MainLayout from './pages/MainLayout'
import Error from './pages/Error'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />,
    errorElement:<Error />,
  },
  {
    path:'/',
    element: <MainLayout />,
    errorElement:<Error />,
    children:[
      {
        path:'/profile',
        element:<Login />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
