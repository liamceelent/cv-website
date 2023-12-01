import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import PreviousProjects from "./components/PreviousProjects";
import Navbar from "./components/NavBar";
import "./App.css"

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/PreviousProjects" element={<PreviousProjects />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
