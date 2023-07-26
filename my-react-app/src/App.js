import { RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
        {/* <Home/>
        <BookViews/> */}
        <RouterProvider router={Routes}/>
    </div>
  );
}

export default App;
