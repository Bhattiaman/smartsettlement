import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Lawyer from "./components/Lawyer";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);
    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <Router>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home ratio={ratio} />} />
        <Route path="/lawyers" element={<Lawyer />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
