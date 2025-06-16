import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import AddBlog from './pages/AddBlog.jsx'
import EditBlog from './pages/EditBlog.jsx'
import BlogPage from './pages/BlogPage.jsx'
import { BlogProvider } from './context/BlogContext.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/create',
        element:<AddBlog/>
      },
      {
        path:'/edit/:id',
        element:<EditBlog/>
      },
      {
        path:'/blog/:id',
        element:<BlogPage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
    <RouterProvider router={router} />
    </BlogProvider>
  </StrictMode>,
)
