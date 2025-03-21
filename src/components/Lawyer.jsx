import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Lawyer = () => {
  // Custom arrow components
  const CustomArrow = ({ direction, onClick }) => (
    <button
      className={`custom-arrow ${direction}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );

  return (
    <div id="work">
      <h2>Dedicated Lawyers, Proven Results</h2>
      <section>
        <article>
          <Carousel
            showArrows={true} // Enable arrows
            showIndicators={true} // Enable indicators
            showStatus={false}
            showThumbs={false}
            interval={3000}
            infiniteLoop={true}
            autoPlay={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <CustomArrow direction="prev" onClick={onClickHandler} />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <CustomArrow direction="next" onClick={onClickHandler} />
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <li
                className={`indicator ${isSelected ? "active" : ""}`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`Slide ${index + 1}`}
              />
            )}
            dynamicHeight={true} // Adjust height based on content
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <div className="image-container">
                  <img
                    src={i.imgSrc}
                    alt={i.title}
                    loading="lazy" // Lazy loading for better performance
                  />
                </div>
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target="_blank" rel="noopener noreferrer" href={i.url}>
                    View Profile
                  </a>
                </aside>
                {/* Social Media Icons */}
                <div className="social-icons">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Lawyer;