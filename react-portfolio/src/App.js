import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path='/contact' element={<Contact/>} />
        {/* <Route path={"/about"} element={About} />
        <Route path={"/portfolio"} element={Portfolio} /> */}
      </Routes>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
