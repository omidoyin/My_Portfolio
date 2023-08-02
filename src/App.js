// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import Projects from "./componets/Projects";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import ProjectDetails from "./componets/ProjectDetails";
import Experience from "./componets/Experience";
import ScrollToTop from "./componets/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
