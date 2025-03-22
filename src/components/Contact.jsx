import React, { useState } from "react";
import vg from "../assets/vg.png"; // Replace with a modern legal-themed graphic
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/contact.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaBalanceScale } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
    } catch (error) {
      toast.error("Error");
      console.log(error);
    } finally {
      setDisableBtn(false);
    }
  };

  const animations = {
    form: { initial: { y: "-100%", opacity: 0 }, whileInView: { y: 0, opacity: 1 } },
    button: { initial: { y: "100%", opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { delay: 0.5 } }
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Us</h2>
          <p>We’re here to help. Reach out to us for any legal inquiries.</p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <FaBalanceScale className="input-icon" />
            <textarea placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>
          </div>

          <motion.button disabled={disableBtn} {...animations.button} type="submit">
            Send Message
          </motion.button>
        </motion.form>
      </section>

      <aside>
        <div className="cta-section">
          <h3>Need Immediate Assistance?</h3>
          <div className="cta-buttons">
            <a href="tel:+13264855467"><FaPhone /> Call Now</a>
            <a href="mailto:info@email.com"><FaEnvelope /> Email Us</a>
          </div>
        </div>

        <div className="office-hours">
          <h3>Office Hours</h3>
          <p><FaClock /> Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p><FaClock /> Sat: 10:00 AM - 2:00 PM</p>
          <p><FaClock /> Sun: Closed</p>
        </div>

        <div className="map-container">
          <h3>Our Location</h3>
          <iframe src="https://www.google.com/maps/embed?..." width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
        </div>
      </aside>
    </div>
  );
};

export default Contact;
