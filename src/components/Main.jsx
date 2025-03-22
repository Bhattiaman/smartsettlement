import React from "react";
import Header from "./Header";
import Home from "./Home";
import Lawyer from "./Lawyer";
import Timeline from "./Timeline";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/Main.scss";

const Main = () => {
  return (
    <div>
      <Header />
      <section id="home"><Home /></section>
      <section id="lawyers"><Lawyer /></section>
      <section id="timeline"><Timeline /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Main;