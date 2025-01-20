import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider , Route , Routes, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import {Header , Footer , Home , About , Contact} from './components/Index/Index'

// const linker = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<App/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"naistm",
//           element:<About/>
//           // children:[{
//           //   path:"contact",
//           //   element:<Contact/>
//           // }]
//         }
//       ]
//     }
//   ]
// )

const linker = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='naistm' element={<About/>}/>
      <Route path='contact' element={<Contact/>}>
      <Route path='contact' element={<Contact/>}></Route>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={linker}/>
  </StrictMode>
)
