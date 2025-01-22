import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { scroller } from "react-scroll";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = location.hash.slice(1);
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
        offset: -70, // Adjust this value based on your navbar height
      });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
          <Navbar />
          <ScrollToHash />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <About />
                  <Portfolio />
                  <Contact />
                </main>
              }
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
