// Import our custom CSS
import '/src/assets/styles/boostsrap.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
