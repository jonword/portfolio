import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/Button/BackToTopButton";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />

        <Home />
        <Skills />
        <Projects />
        <BackToTopButton />

        <Footer />
      </div>
    </>
  );
}

export default App;
