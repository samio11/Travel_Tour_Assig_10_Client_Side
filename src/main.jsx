import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Web_paths from './my_web_routes/Web_paths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Web_paths}></RouterProvider>
  </React.StrictMode>,
)
