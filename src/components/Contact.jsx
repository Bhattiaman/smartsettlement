import React, { useState } from "react";
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
          <h2>Get in Touch</h2>
          <p>We’re here to help. Reach out to us for any legal inquiries or questions.</p>

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
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>+1 (326) 485-5467</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>info@email.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>123 Legal Street, Suite 456, City, Country</p>
          </div>
        </div>

        <div className="office-hours">
          <h3>Office Hours</h3>
          <div className="info-item">
            <FaClock className="info-icon" />
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <p>Sat: 10:00 AM - 2:00 PM</p>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <p>Sun: Closed</p>
          </div>
        </div>

        <div className="map-container">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2e7d30c3b8!2sLegal%20Street!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </aside>
    </div>
  );
};

export default Contact;