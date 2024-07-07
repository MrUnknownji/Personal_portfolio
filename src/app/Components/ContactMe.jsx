"use client";
import React, { useRef } from "react";
import { SocialMediaInfo } from "../Assets/Data/Arrays";
import SocialMediaCard from "./SocialMediaCard";
import GsapHeading from "./GsapAnimations/GsapHeading";
import { useGSAP } from "@gsap/react";
import { animations } from "./GsapAnimations/GsapAnimations";

const ContactMe = () => {
  const contactMeSection = useRef();
  useGSAP(
    () => {
      animations.contactMe.init(contactMeSection);
    },
    { scope: contactMeSection }
  );

  return (
    <div id="contactme" className="contactMeSection" ref={contactMeSection}>
      <GsapHeading>
        <h1 id="heading2" className="heading">{`Let's Connect`}</h1>
      </GsapHeading>
      <p id="contactMeParagraph" className="contactMeParagraph">
        {`Welcome! If you're ready to enhance your projects or ventures through
        the prowess of software development, I'm here to collaborate with you.
        Connect with me through my social handles, and let's explore the
        exciting possibilities of crafting cutting-edge software solutions
        together. I'm enthusiastic about turning your digital aspirations into
        reality. Let's embark on the journey of creating something extraordinary
        together!`}
      </p>
      <h2 id="ContactMeArrowText" className="text-center my-5">
        Contact Me →
      </h2>
      <div className="socialMediaCardContainer">
        {SocialMediaInfo.map((value, i) => (
          <SocialMediaCard key={i} index={i} value={value} />
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
