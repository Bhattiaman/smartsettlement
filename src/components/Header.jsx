import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
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
    <Link to="/" className="logoContainer">
      <img src={final_logo} alt="Company Logo" className="logo" />
    </Link>
    <div className="navLinks">
      <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
      <Link onClick={() => setMenuOpen(false)} to="/lawyers">Lawyers</Link>
      <Link onClick={() => setMenuOpen(false)} to="/timeline">Case Management</Link>
      <Link onClick={() => setMenuOpen(false)} to="/services">File a Dispute</Link>
      <Link onClick={() => setMenuOpen(false)} to="/arbitrators">Our Arbitrators & Mediators</Link>
      <Link onClick={() => setMenuOpen(false)} to="/pricing">Pricing</Link>
      <Link onClick={() => setMenuOpen(false)} to="/contact">Contact Us</Link>
    </div>
    <a href="mailto:official.amanbhatti105@gmail.com" className="loginBtn">
      <button>Login/Signup</button>
    </a>
  </>
);

export default Header;
