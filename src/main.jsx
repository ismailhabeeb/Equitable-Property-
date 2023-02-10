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
const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '',
        element: <Login />
      }, {
        path: 'signup',
        element: <Signup />
      }
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
