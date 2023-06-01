import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './componets/Statistics/Statistics'
import Home from './componets/Home/Home'
import ErrorPage from './componets/ErrorPage/ErrorPage'
import Blog from './componets/Blog/Blog'
import Details from './componets/Details/Details'
import Applied from './componets/Applied/Applied'
import { appliedJobData } from './Loders/getCart&JobProduct'
// import { Params } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('/jobs.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <Applied></Applied>,
        loader: appliedJobData
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/details/:jobId',
        element: <Details></Details>,
        loader: ({params})=>fetch(`/jobs.json`)
      }
    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
