import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import ListaReceitas from './components/ListaReceitas.jsx'
import Receita from './components/Receita.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "receitas",
    element: <ListaReceitas />
  },
  {
    path: "receita",
    element: <Receita />
  }
]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Home />
//   </StrictMode>,
// )
const root = document.getElementById("root");
createRoot(root).render(
  <RouterProvider router={router} />,
);
