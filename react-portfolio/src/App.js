import Contact from "./components/Contact/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Navbar/Header.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
