import './App.css'
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Params from './components/Params';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import Courses from './components/Courses';
import NotFound from './components/NotFound'
import MainLayout from './mainLayout';

function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <MainLayout/>,
        children: [
          
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
          element: <Dashboard/>,
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
          //when we write : www.coffeewithamar.in/id=abcd this is Query Parameter 
          // This is Route Parameter 
          path: '/student/:id',
          element: <Params/>
        },
        {
          path: '*',
          element: <NotFound/>
        }]
      },
      
    ]
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
