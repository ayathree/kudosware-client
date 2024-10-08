import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Resume from './pages/Resume';
import AuthProvider from './routes/AuthProvider';
import Private from './routes/Private';
import Profile from './pages/Profile';
import ResumeProfile from './pages/ResumeProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/resume',
        element:<Private><Resume></Resume></Private>,
       
        
      },
      {
        path:'/profile/:email',
        element:<Private><Profile></Profile></Private>,
        loader:({params})=>fetch(`https://kudosware-server.vercel.app/userResume/${params.email}`)
      },
      {
        path:'/resumeProfile/:email',
        element:<Private><ResumeProfile></ResumeProfile></Private>,
        loader:({params})=>fetch(`https://kudosware-server.vercel.app/profileResume/${params.email}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
