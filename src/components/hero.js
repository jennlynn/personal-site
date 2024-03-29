import React from "react";
import AnimateOnScroll from "../utils/animateOnScroll.tsx"
import Nav from "./nav";
import treesImage from "../assets/images/text_bg_03.jpg";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="Hero-wrapper">
        <h1 className="Hero">
        <AnimateOnScroll customClass="this">
          <svg viewBox="0 0 800 120" className="Hero-text">
            <pattern
              id="p-img"
              viewBox="78 270 800 80"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href={treesImage}
                width="1000"
                height="600"
                className="Hero-image"
              />
            </pattern>
            <text
              textAnchor="middle"
              x="50%"
              y="50%"
              dy=".35em"
              className="img-layer"
            >
              Jenn Rabin
            </text>
          </svg>
      </AnimateOnScroll>
        </h1>
      <h2 className="Hero-subHeader">
      {/* Artist ~ Frontend Dev  ~ <wbr /> UX Enthusiast ~ <wbr /> A11y & DEI Advocate */}
      Frontend Dev  ~  Artist ~ <wbr /> UX Enthusiast ~ <wbr /> A11y & DEI Advocate 
      </h2>
      <Nav />
    </section>
  );
};

export default Hero;
