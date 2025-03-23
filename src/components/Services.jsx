import React from "react";
import "../styles/services.scss";

const Services = () => {
  return (<>
    
    <div id="services">
     

      <div className="container">
        {/* Left Side: Video */}
        <h2>Work Process</h2>
        <div className="video-section">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_sI_Ps7JSEk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side: Work Process */}
        <div className="process-section">
          <div className="process">
            {/* Step 1 */}
            <div className="step">
              <div className="step-icon">
                <img
                  src="https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/process-1-icon-1.svg"
                  alt="Initial Consultation"
                />
              </div>
              <div className="step-content">
                <h4>Initial Consultation</h4>
                <p>
                  Our experienced lawyers thoroughly analyze the facts of each case. They then apply the relevant laws to provide clear and actionable advice.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step">
              <div className="step-icon">
                <img
                  src="https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/process-1-icon-2.svg"
                  alt="Case Evaluation"
                />
              </div>
              <div className="step-content">
                <h4>Case Evaluation</h4>
                <p>
                  We prioritize understanding your concerns and aligning with your goals. Your satisfaction is our top priority as we assess the strengths and challenges of your case.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step">
              <div className="step-icon">
                <img
                  src="https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/process-1-icon-3.svg"
                  alt="Legal Strategy"
                />
              </div>
              <div className="step-content">
                <h4>Legal Strategy</h4>
                <p>
                  We develop a customized plan tailored to your unique situation. Our strategy is designed to protect your rights and achieve the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;