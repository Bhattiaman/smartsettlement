import React from "react";
import final_logo from "../assets/final_logo.png";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      {/* Section 1: All Pages */}
      <div>
        <h2>Pages</h2>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/blog">Our Blog</a></li>
          <li><a href="/attorney">Our Attorney</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/pricing">Pricing Plan</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
        </ul>
      </div>

      {/* Section 2: All Services Links */}
      <div>
        <h2>Our Services</h2>
        <ul>
          <li><a href="/criminal-law">Criminal Law</a></li>
          <li><a href="/corporate-law">Corporate Law</a></li>
          <li><a href="/family-law">Family Law</a></li>
          <li><a href="/real-estate-law">Real Estate Law</a></li>
          <li><a href="/personal-injury-law">Personal Injury Law</a></li>
          <li><a href="/health-care-policy">Health Care Policy</a></li>
        </ul>
      </div>

      {/* Section 3: Logo, Description, and Social Media Icons */}
      <div>
        <img src={final_logo} alt="Logo" />
        <p>Your trusted legal partner since 1982.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </div>
      </div>

      {/* Section 4: Location, Phone, and Email */}
      <div>
        <h2>Contact Info</h2>
        <ul>
          <li>371 7th Ave, New York, NY 10001</li>
          <li>Phone: +1 32-6485-5467</li>
          <li>Email: info@email.com</li>
        </ul>
      </div>

      {/* Scroll to Top Button */}
      <a href="#home" className="scroll-top">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;