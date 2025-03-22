import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import "../styles/home.scss";
import right_home from "../assets/right_home.png";

const Home = () => {
  const animations = {
    left: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    },
    right: {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
    },
    typewriter: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
    },
    buttons: {
      initial: { y: "100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } },
    },
  };

  return (
    <div id="home">
      <section className="hero-section">
        <motion.div {...animations.left} className="left-section">
          <h1>
            SettleSmart Solutions
          </h1>
          <h4>
            Smart Solutions for Settling Disputes
          </h4>

          <motion.div {...animations.typewriter}>
            <Typewriter
              options={{
                strings: [
                  "From Vivaad se Samadhan Tak",
                  "Justice Delivered with Care",
                  "Start a Dispute",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
            />
          </motion.div>

          <motion.div {...animations.buttons} className="button-container">
            <a href="mailto:official.amanbhatti105@gmail.com" className="primary-btn">
              Join as Arbitrator/Mediator
            </a>
            <a href="#Service" className="secondary-btn">
              Projects <BsArrowUpRight />
            </a>
          </motion.div>
        </motion.div>

        <motion.div {...animations.right} className="right-section">
          <img src={right_home} alt="SettleSmart Solutions" />
        </motion.div>
      </section>

      <BsChevronDown className="scroll-down" />
    </div>
  );
};

export default Home;