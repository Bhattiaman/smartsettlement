import React, { useState } from "react";
import vg from "../assets/vg.png"; // Replace with a modern legal-themed graphic
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaBuilding, FaBalanceScale } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  };

  const animations = {
    form: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Us</h2>
          <p>We’re here to help. Reach out to us for any legal inquiries.</p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaBalanceScale className="input-icon" />
            <textarea
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            ></textarea>
          </div>

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Trust Badges */}
        <div className="trust-badges">
          <span>✅ Certified Lawyers</span>
          <span>🕒 Free Consultation</span>
          <span>⭐ 5-Star Rated</span>
        </div>
      </section>

      <aside>
        {/* Call-to-Action Section */}
        <div className="cta-section">
          <h3>Need Immediate Assistance?</h3>
          <div className="cta-buttons">
            <a href="tel:+13264855467">
              <FaPhone /> Call Now
            </a>
            <a href="mailto:info@email.com">
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div className="office-hours">
          <h3>Office Hours</h3>
          <p>
            <FaClock /> Mon - Fri: 9:00 AM - 6:00 PM
          </p>
          <p>
            <FaClock /> Sat: 10:00 AM - 2:00 PM
          </p>
          <p>
            <FaClock /> Sun: Closed
          </p>
        </div>

        {/* Interactive Map */}
        <div className="map-container">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036035!2d-73.9877316845936!3d40.748443979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x3a7b1e1b3b0b1b1b!2s371%207th%20Ave%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1629999999999!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h3>What Our Clients Say</h3>
          <div className="testimonial-cards">
            <div className="card">
              <p>"Excellent service! Highly recommend this law firm."</p>
              <span>- John Doe</span>
            </div>
            <div className="card">
              <p>"Professional and knowledgeable attorneys."</p>
              <span>- Jane Smith</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Contact;