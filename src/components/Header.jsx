import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import final_logo from "../assets/final_logo.png";
import "../styles/header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navContainer">
        <Link to="/" className="logoContainer">
          <img src={final_logo} alt="Company Logo" className="logo" />
        </Link>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/lawyers">Lawyers</Link>
          <Link to="/timeline">Case Management</Link>
          <Link to="/services">File a Dispute</Link>
          <Link to="/arbitrators">Our Arbitrators & Mediators</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <a href="mailto:official.amanbhatti105@gmail.com" className="loginBtn">
          <button>Login/Signup</button>
        </a>
      </nav>

      {/* Mobile Navigation Button */}
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`navPhone ${menuOpen ? "navPhoneOpen" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/lawyers" onClick={() => setMenuOpen(false)}>Lawyers</Link>
        <Link to="/timeline" onClick={() => setMenuOpen(false)}>Case Management</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>File a Dispute</Link>
        <Link to="/arbitrators" onClick={() => setMenuOpen(false)}>Our Arbitrators & Mediators</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <a href="mailto:official.amanbhatti105@gmail.com" className="loginBtn">
          <button>Login/Signup</button>
        </a>
      </div>
    </>
  );
};

export default Header;