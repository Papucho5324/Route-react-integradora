import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.tsx';
import Paquetes from './pages/Paquetes.tsx';
import Register from './pages/Register.tsx';

const router = createHashRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/paquetes',
    element:<Paquetes/>
  },
  {
    path:'/registrarse',
    element:<Register/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
