import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Movies, WatchList } from './components/router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home testId='main' ></Home>,
    children: [
      {index: true, element:<Movies/>},
      {
        path: "movies",
        element: <Movies/>
      },
      {
        path: "watchlist",
        element: <WatchList/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
