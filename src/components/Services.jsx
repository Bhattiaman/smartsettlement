import React from "react";

const Services = () => {
  return (
    <div id="services">
      <h2>Work Process</h2>
      <h3>Navigating The Law: Your Assurance Of Peace</h3>

      <div className="process">
        <div className="step">
          <h4>Initial Consultation</h4>
          <p>
            Our experienced lawyers thoroughly analyze the facts of each case. They then apply the relevant laws to provide clear and actionable advice.
          </p>
        </div>

        <div className="step">
          <h4>Case Evaluation</h4>
          <p>
            We prioritize understanding your concerns and aligning with your goals. Your satisfaction is our top priority as we assess the strengths and challenges of your case.
          </p>
        </div>

        <div className="step">
          <h4>Legal Strategy</h4>
          <p>
            We develop a customized plan tailored to your unique situation. Our strategy is designed to protect your rights and achieve the best possible outcome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;