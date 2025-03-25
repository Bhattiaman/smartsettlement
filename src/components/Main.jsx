import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Lawyer from "./Lawyer";
import Timeline from "./Timeline";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Arbitrators from "./Arbitrators"; // You'll need to create this
import Pricing from "./Pricing"; // You'll need to create this
import "../styles/Main.scss";

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home"><Home /></section>
            <section id="lawyers"><Lawyer /></section>
            <section id="timeline"><Timeline /></section>
            <section id="services"><Services /></section>
            <section id="contact"><Contact /></section>
          </>
        } />
        <Route path="/lawyers" element={<Lawyer />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/services" element={<Services />} />
        <Route path="/arbitrators" element={<Arbitrators />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;