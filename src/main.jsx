import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import LandingPage from './components/outletComponents/LandingPage.jsx';
import About from './components/About/About.jsx';
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      { index: true, element: <LandingPage /> },
     
    ],
    errorElement:<Error/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
