import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,  
} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="text-5xl">Hello world</div>,
  },
  {
    path: '/app',
    element: <App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
