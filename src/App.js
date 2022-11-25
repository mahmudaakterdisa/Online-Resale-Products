import logo from './logo.svg';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Route/Route';

function App() {
  return (
    <div className='App'>


      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
