"use client";
import React, { useLayoutEffect, useRef } from "react";
import { InfoCardArr } from "./Arrays";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutMe = () => {
  const aboutMe = useRef();

  useLayoutEffect(() => {
    const animateInfoContainers = () => {
      const tl = gsap.timeline();
      tl.from(".aboutMeInfoContainer", {
        x: 200,
        opacity: 0,
        duration:3,
        stagger: 0.3,
        ease: "elastic.out(2, 0.5)",
      });
      ScrollTrigger.create({
        trigger: ".aboutMeInfoContainer",
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: tl,
      });
    };

    const ctx = gsap.context(animateInfoContainers, aboutMe);

    return () => ctx.revert();
  }, []);

  return (
    <div id="aboutme" className="aboutMe" ref={aboutMe}>
      <h2 id="heading1" className="heading my-10">
        About Me
      </h2>
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
      {title && <h3>{title}</h3>}
      <p>{desc}</p>
    </div>
  );
};

export default AboutMe;
