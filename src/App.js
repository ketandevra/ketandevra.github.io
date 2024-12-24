import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbaord from "./screens/Dashboard";
import Display from "./screens/Gympl/Display";
import Navbar from "./Routes/Navbar";
import Home from "./screens/Home/Home";
import ContactUs from "./screens/Contact/ContactUs";
import CricketPlayerCard from "./screens/Cricket/CricketPlayerCard";
import PlayerDetail from "./screens/Cricket/PlayerDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "64px", padding: "0px" }}>
        {/* Ensure the content starts below the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Display />} />
          <Route path="/cricket" element={<CricketPlayerCard />} />
          <Route path="/player/:id" element={<PlayerDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
