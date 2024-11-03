import './App.css'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

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
