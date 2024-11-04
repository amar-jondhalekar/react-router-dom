import './App.css'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Params from './components/Params';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import Courses from './components/Courses';

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
        </div>,
        children:[
          {
            path:'courses',
            element: <Courses/>
          },
          {
            path:'mock-tests',
            element: <MockTest/>
          },
          {
            path: 'reports',
            element: <Reports/>
          }
        ]
      },
      {
        //when we write linke : www.coffeewithamar.in/id=abcd this is Query Parameter 
        // This is Route Parameter 
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
