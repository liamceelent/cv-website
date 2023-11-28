import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import PreviousProjects from "./pages/PreviousProjects";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/PreviousProjects" element={<PreviousProjects />} />
        </Routes>
    </Router>
  );
}

export default App;
