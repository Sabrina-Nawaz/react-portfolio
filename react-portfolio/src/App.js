import Contact from "./components/Contact/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Navbar/Header.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import About from "./components/About/About.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/resume"} element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
