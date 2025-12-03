import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Drive from "./images/Homeimg.jpg";

function About() {
  const typedelement = useRef(null);

  useEffect(() => {
    new Typed(typedelement.current, {
      strings: [
        "A driving school for both two-wheelers and four-wheelers provides comprehensive training to help learners gain confidence and master safe driving skills. Certified instructors guide students through every step, from understanding vehicle controls and road signs to practicing real-world driving techniques. Whether it’s learning to balance and maneuver a bike or handling a car smoothly in traffic, the school offers structured lessons tailored to each learner’s pace. With a focus on safety, discipline, and responsible driving, the training prepares students to become competent, licensed drivers ready for the road."
      ],
      typeSpeed: 20,
    });
  }, []);

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "20px"
    }}>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          fontSize: "40px",
          fontFamily: "sans-serif",
          marginBottom: "30px"
        }}
      >
        About us
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {/* Image */}
        <div style={{ flex: "1 1 350px", minWidth: "300px" }}>
          <img
            src={Drive}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "22px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
            alt="Driving School"
          />
        </div>

        {/* Text */}
        <div
          style={{
            flex: "1 1 350px",
            minWidth: "300px",
            fontSize: "21px",
            lineHeight: "1.6",
            fontFamily: "sans-serif",
            textAlign: "justify"
          }}
        >
          <span ref={typedelement}></span>
        </div>
      </div>

      {/* Inline media query for mobile */}
      <style>
        {`
          @media only screen and (max-width: 768px) {
            h1 {
              font-size: 28px !important;
              margin-bottom: 20px !important;
            }
            div[style*="flexDirection: row"] {
              flex-direction: column !important;
            }
            div[style*="fontSize: 21px"] {
              font-size: 16px !important;
            }
            img {
              border-radius: 15px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
