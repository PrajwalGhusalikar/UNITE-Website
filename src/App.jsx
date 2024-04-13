import "./App.css";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import Resources from "./Components/Resources";
import RiskFactors from "./Components/RiskFactors";
import Statictics from "./Components/Statictics";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-slate-100  w-30">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/riskfactors" element={<RiskFactors />} />
          <Route exact path="/statictics" element={<Statictics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
