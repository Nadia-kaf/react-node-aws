import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
 { path:"/", element:<Home/>},
 { path:"/login", element:<Login/>},
 { path:"/register", element:<Register/>}
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
