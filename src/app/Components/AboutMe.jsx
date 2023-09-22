"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { InfoCardArr } from "./Arrays";
import gsap from "gsap";
import { useWindowSize } from "./useWindowSize";

const AboutMe = () => {
  const aboutMe = useRef();
  const innerWidth = useWindowSize();

  useLayoutEffect(() => {
    const animateInfoContainers = () => {
      InfoCardArr.forEach((card, index) => {
        gsap.from(`#infoContainer${index}`, {
          x: index * 200 - 200,
          y: index * 50,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `#infoContainer${index}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
        if (index > 0 && innerWidth > 1024) {
          const container = document.getElementById(`infoContainer${index}`);
          addMouseEvents(container);
        }
      });
    };

    const ctx = gsap.context(animateInfoContainers, aboutMe);

    return () => ctx.revert();
  }, []);

  const addMouseEvents = (container) => {
    container.addEventListener("mouseenter", () => {
      container.style.transform = "rotateZ(0)";
    });
    container.addEventListener("mouseleave", () => {
      container.style.transform = "rotateZ(-10deg)";
    });
  };

  return (
    <div id="aboutme" className="text-white px-20" ref={aboutMe}>
      <h2 id="heading1" className="heading my-16">
        About Me
      </h2>
      <InfoContainer
        desc={InfoCardArr[0].desc}
        rotateNone={true}
        idNumber={0}
      />
      <div className="aboutMeSubDiv flex items-center gap-14 mt-16">
        {InfoCardArr.slice(1).map((card, index) => (
          <InfoContainer
            key={index}
            title={card.title}
            desc={card.desc}
            idNumber={index + 1}
            rotateNone={innerWidth > 1024 ? false : true}
          />
        ))}
      </div>
    </div>
  );
};

const InfoContainer = ({ title, desc, rotateNone, idNumber }) => {
  return (
    <div
      id={`infoContainer${idNumber}`}
      className={`aboutMeInfoContainer ${rotateNone ? "" : "rotate-[-10deg]"}`}
    >
      {title && <h3>{title}</h3>}
      <p>{desc}</p>
    </div>
  );
};

export default AboutMe;
