import React from 'react';
import '../styles/Arbitrators.scss';

const Arbitrators = () => {
  const arbitratorData = [
    {
      id: 1,
      name: "Hon. Margaret Dawson",
      title: "Senior Arbitrator",
      experience: "25+ years in commercial arbitration",
      specialties: ["Commercial disputes", "Contract law", "Mergers & acquisitions"],
      bio: "Former Chief Judge with extensive experience in resolving complex business disputes. Recognized for fair and efficient proceedings.",
      image: "arbitrator1.jpg"
    },
    {
      id: 2,
      name: "Dr. Robert Chen",
      title: "International Arbitration Specialist",
      experience: "18 years cross-border dispute resolution",
      specialties: ["International trade", "Investment treaties", "Construction disputes"],
      bio: "Harvard-educated arbitrator fluent in 4 languages. Served on over 150 international arbitration panels.",
      image: "arbitrator2.jpg"
    },
    {
      id: 3,
      name: "Elizabeth Morgan, Esq.",
      title: "Labor Arbitration Expert",
      experience: "15 years in employment disputes",
      specialties: ["Labor relations", "Employment contracts", "Workplace discrimination"],
      bio: "Former federal mediator with exceptional settlement rate. Known for creative problem-solving in tense negotiations.",
      image: "arbitrator3.jpg"
    },
    {
      id: 4,
      name: "James Whitaker, QC",
      title: "Construction Arbitration Lead",
      experience: "22 years in construction law",
      specialties: ["Construction defects", "Delay claims", "Professional liability"],
      bio: "Chartered arbitrator with engineering background. Resolved over $2B in construction disputes worldwide.",
      image: "arbitrator4.jpg"
    }
  ];

  return (
    <div className="arbitrators-page">
      <section className="arbitrators-hero">
        <div className="container">
          <h1>Our Panel of Distinguished Arbitrators</h1>
          <p className="subtitle">Neutral experts dedicated to fair and efficient dispute resolution</p>
          <div className="hero-cta">
            <button className="primary-btn">Request an Arbitrator</button>
            <button className="secondary-btn">Learn About Process</button>
          </div>
        </div>
      </section>

      <section className="arbitrators-intro">
        <div className="container">
          <h2>Why Choose Our Arbitration Services</h2>
          <div className="intro-grid">
            <div className="intro-card">
              <div className="icon">⚖️</div>
              <h3>Impartiality Guaranteed</h3>
              <p>All arbitrators adhere to strict ethical standards and conflict-free policies</p>
            </div>
            <div className="intro-card">
              <div className="icon">⏱️</div>
              <h3>Expedited Process</h3>
              <p>Resolve disputes typically 60% faster than traditional litigation</p>
            </div>
            <div className="intro-card">
              <div className="icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Save up to 70% compared to court proceedings</p>
            </div>
            <div className="intro-card">
              <div className="icon">🔒</div>
              <h3>Confidential</h3>
              <p>Private proceedings protect your business reputation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="arbitrators-list">
        <div className="container">
          <h2>Meet Our Arbitrators</h2>
          <p className="section-description">Select from our panel of highly qualified neutrals, each with specialized expertise</p>
          
          <div className="arbitrators-grid">
            {arbitratorData.map(arbitrator => (
              <div key={arbitrator.id} className="arbitrator-card">
                <div className="arbitrator-image">
                  <img src={`/images/${arbitrator.image}`} alt={arbitrator.name} />
                </div>
                <div className="arbitrator-details">
                  <h3>{arbitrator.name}</h3>
                  <p className="title">{arbitrator.title}</p>
                  <p className="experience">{arbitrator.experience}</p>
                  
                  <div className="specialties">
                    <h4>Specialties:</h4>
                    <ul>
                      {arbitrator.specialties.map((specialty, index) => (
                        <li key={index}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="bio">{arbitrator.bio}</p>
                  
                  <div className="arbitrator-actions">
                    <button className="profile-btn">View Full Profile</button>
                    <button className="select-btn">Select Arbitrator</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="arbitration-process">
        <div className="container">
          <h2>Our Arbitration Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>We assess your case and recommend suitable arbitrators</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Arbitrator Selection</h3>
              <p>You choose from our qualified panel members</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Preliminary Hearing</h3>
              <p>Establish procedures and timeline for resolution</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Final Resolution</h3>
              <p>Binding decision typically within 90 days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="arbitration-cta">
        <div className="container">
          <h2>Ready to Resolve Your Dispute?</h2>
          <p>Contact us today to begin the arbitration process</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule Consultation</button>
            <button className="cta-secondary">Call Now: (555) 123-4567</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arbitrators;