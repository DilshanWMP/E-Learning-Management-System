import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllCoursesPage from './pages/AllCoursesPage.jsx'
import MyCoursesPage from './pages/MyCoursesPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allcourses",
    element: <AllCoursesPage />,
  },
  {
    path: "/mycourses",
    element: <MyCoursesPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <RouterProvider router={router} />
  </StrictMode>,
)
