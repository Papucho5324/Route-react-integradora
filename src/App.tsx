import Navbar from "./components/Navbar"
import { BrowserRouter, Routes } from "react-router-dom";
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