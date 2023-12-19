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
import Footer from "./components/footerdiv";
import "./App.css"
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
          <Nav/>
          <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/PreviousProjects" element={<PreviousProjects />} />
          </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
