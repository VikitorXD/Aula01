import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/EditarProduto/Home/index.jsx'
import Produto from './routes/EditarProduto/Produto/index.jsx'
import Error from './routes/EditarProduto/Error/index.jsx'
import EditarProduto from './routes/EditarProduto/EditarProdut/Index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/protudo",
        element: <Protudo/>,
      },
      {
        path:"/protudo/editar/:id",
        element: <EditarProduto/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
