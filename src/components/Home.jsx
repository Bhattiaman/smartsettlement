import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/hhh.png";
import right_home from "../assets/right_home.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
          SettleSmart Solutions <br />  <h4 id="headline">Smart Solutions for settling disputes</h4>
          </motion.h1>

          <Typewriter
            options={{
              strings: ["From Vivaad se Samadhan Tak", "Justice Delivered with Care", "Start a Dispute"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.amanbhatti105@gmail.com">Join as Arbitrator/Mediator</a>
            <a href="#Service">
              Projects <BsArrowUpRight />
            </a>
          </div>
            
        </div>
      </section>
      <section>
        <img src={right_home} alt="Aman" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
