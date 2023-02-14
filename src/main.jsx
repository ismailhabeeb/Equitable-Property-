// Import our custom CSS
import '/src/assets/styles/boostsrap.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/login_layout'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/dashboard/home'
import LandinPage from './pages/dashboard/landing_page'
import Forgot_password from './pages/porget_password/forgot_password'
import Reset_password from './pages/porget_password/reset_password'
const router = createBrowserRouter([
  {
    path: '/login', element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '',
        element: <Login />
      }, {
        path: 'signup',
        element: <Signup />
      }, {
        path: 'forget_password',
        element: <Forgot_password />
      }, {
        path: 'reset_password',
        element: <Reset_password />
      }
    ]
  },
  {
    path: '/', element: <Home />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '',
        element: <LandinPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
