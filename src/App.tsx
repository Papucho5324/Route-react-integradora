import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { renderRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {renderRoutes()}
      </Routes>
    
    </BrowserRouter>
    
  );
};

export default App;