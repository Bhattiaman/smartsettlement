import React from 'react';
import '../styles/Pricing.scss';

const Pricing = () => {
  const legalPlans = [
    {
      name: 'Basic Consultation',
      price: '$150',
      period: 'per hour',
      features: [
        'Initial case evaluation',
        'Legal advice session (1 hour)',
        'Document review (up to 5 pages)',
        'Email follow-up within 48 hours',
        'Basic strategy outline'
      ],
      featured: false
    },
    {
      name: 'Standard Representation',
      price: '$2,500',
      period: 'retainer',
      features: [
        'All Basic Consultation features',
        'Full case representation',
        'Court appearances',
        'Legal document preparation',
        'Up to 10 hours of service',
        'Phone/email support (business hours)',
        'Monthly case updates'
      ],
      featured: true
    },
    {
      name: 'Premium Legal Package',
      price: '$5,000',
      period: 'retainer',
      features: [
        'All Standard Representation features',
        'Unlimited hours for case duration',
        '24/7 emergency support',
        'Expert witness coordination',
        'Comprehensive legal research',
        'Priority scheduling',
        'Quarterly legal audits'
      ],
      featured: false
    }
  ];

  return (
    <div className="pricing">
      <div className="pricing-header">
        <h1>Transparent Legal Fees</h1>
        <p>Clear pricing for exceptional legal services with no hidden costs</p>
      </div>
      
      <div className="pricing-plans">
        {legalPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
          >
            {plan.featured && <div className="popular-badge">Recommended</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={`cta-button ${plan.featured ? 'featured' : ''}`}>
              Schedule Consultation
            </button>
          </div>
        ))}
      </div>
      
      <div className="pricing-footer">
        <div className="disclaimer">
          <p><strong>Note:</strong> All legal services are tailored to your specific needs. Final fees may vary based on case complexity. Contingency fees available for qualifying cases.</p>
        </div>
        <div className="contact-cta">
          <p>Need custom legal solutions? <a href="/contact">Request a personalized quote</a></p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;