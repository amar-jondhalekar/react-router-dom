import './App.css'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Params from './components/Params';

function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: 
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path: '/about',
        element: 
        <div>
          <Navbar/>
          <About/>
        </div>
      },
      {
        path: '/dashboard',
        element: 
        <div>
          <Navbar/>
          <Dashboard/>
        </div>
      },
      {
        path: '/student/:id',
        element: 
        <div>
          <Navbar/>
          <Params/>
        </div>
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
