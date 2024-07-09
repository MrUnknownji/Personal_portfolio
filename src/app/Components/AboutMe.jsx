"use client";
import React, { useRef } from "react";
import { InfoCardArr } from "../Assets/Data/Arrays";
import { useGSAP } from "@gsap/react";
import GsapHeading from "../Components/GsapAnimations/GsapHeading";
import { animations } from "./GsapAnimations/GsapAnimations";

const AboutMe = () => {
  const aboutMe = useRef();
  useGSAP(
    () => {
      animations.aboutMe.init(aboutMe);
    },
    { scope: aboutMe }
  );

  return (
    <div id="aboutme" className="aboutMe" ref={aboutMe}>
      <GsapHeading>
        <h3 id="heading1" className="heading my-10">
          About Me
        </h3>
      </GsapHeading>
      <InfoContainer
        desc={InfoCardArr[0].desc}
        rotateNone={true}
        idNumber={0}
      />
      <div className="aboutMeSubDiv">
        {InfoCardArr.slice(1).map((card, index) => (
          <InfoContainer
            key={index}
            title={card.title}
            desc={card.desc}
            idNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

const InfoContainer = ({ title, desc, idNumber }) => {
  return (
    <div
      id={`infoContainer${idNumber}`}
      className={`aboutMeInfoContainer ${
        idNumber == 0 ? "firstContainer" : "notFirstContainer"
      }`}
    >
      {title && <h4>{title}</h4>}
      <p>{desc}</p>
    </div>
  );
};

export default AboutMe;
