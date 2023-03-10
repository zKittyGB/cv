import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Employees from "./pages/Employees";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CV" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}
