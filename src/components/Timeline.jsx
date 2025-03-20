import React from 'react';

const cartData = [
  {
    title: "Criminal Law",
    imgSrc: "https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/service_card_1_1.svg",
    description: "Defense representations for various criminal charges. Investigations and evidence analysis. Bail applications and more."
  },
  {
    title: "Corporate Law",
    imgSrc: "https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/service_card_1_2.svg",
    description: "Legal advocacy for diverse corporate matters. Conducting in-depth research and reviewing evidence."
  },
  {
    title: "Family Law",
    imgSrc: "https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/service_card_1_3.svg",
    description: "Expert defense strategies for a variety of family cases. Comprehensive case analysis and representation in hearings."
  },
  {
    title: "Real Estate Law",
    imgSrc: "https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/service_card_1_4.svg",
    description: "Representation in numerous real estate matters, including detailed investigations and assistance with legal procedures."
  },
  {
    title: "Personal Injury Law",
    imgSrc: "https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/service_card_1_5.svg",
    description: "Professional legal defense for different types of personal injury claims. Careful examination of case details."
  },
  {
    title: "Health Care Policy",
    imgSrc: "https://wordpress.themeholy.com/ensaf/wp-content/uploads/2024/12/service_card_1_6.svg",
    description: "Skilled advocacy for individuals facing various health care policy issues. Support and preparation of legal motions."
  }
];

const Timeline = () => {
  return (
    <>
      <h2 id="timeline_heading">Services</h2>
      <div className="cards-container">
        {cartData.map((cart, index) => (
          <div className="card" key={index}>
            <img src={cart.imgSrc} alt={`${cart.title} Icon`} />
            <h2>{cart.title}</h2>
            <p>{cart.description}</p>
            <a href="#">Read More →</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;