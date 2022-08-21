
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App1 from "./components/pages/home"
import App2 from "./components/pages/test"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App1 />}/>
      <Route path="/test" element={<App2 />}/>
       
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
