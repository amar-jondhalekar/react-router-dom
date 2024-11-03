import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';

function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
