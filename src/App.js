import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Route/Route';

function App() {
  return (
    <div>
      <div>
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn">open modal</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">Yay!</label>
            </div>
          </div>
        </div>
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
