import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/header_logo.scss";
import final_logo from "../assets/final_logo.png";
const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav className="navContainer">
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <a href="/" className="logoContainer">
      <img src={final_logo} alt="Company Logo" className="logo" />
    </a>
    <div className="navLinks">
      <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
      <a onClick={() => setMenuOpen(false)} href="#work">Lawyers</a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">Case Management</a>
      <a onClick={() => setMenuOpen(false)} href="#services">File a Dispute</a>
      <a onClick={() => setMenuOpen(false)} href="#arbitrators">Our Arbitrators & Mediators</a>
      <a onClick={() => setMenuOpen(false)} href="#pricing">Pricing</a>
      <a onClick={() => setMenuOpen(false)} href="#contact">Contact Us</a>
    </div>
    <a href="mailto:official.amanbhatti105@gmail.com" className="loginBtn">
      <button>Login/Signup</button>
    </a>
  </>
);

export default Header;