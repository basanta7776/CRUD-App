import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homee from "./Homee";
import Create from "./Create";
import Update from "./Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
