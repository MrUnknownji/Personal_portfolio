"use client";
import React, { useLayoutEffect, useRef } from "react";
import { SocialMediaInfo } from "./Arrays";
import gsap from "gsap";
import SocialMediaCard from "./SocialMediaCard";
import ScrollTrigger from "gsap/ScrollTrigger";
import GsapHeading from "./GsapAnimations/GsapHeading";

const ContactMe = () => {
  const contactMeSection = useRef();
  useLayoutEffect(() => {
    const animateSocialMediaCards = () => {
      const tl = gsap.timeline();

      tl.from("#contactMeParagraph", {
        y: -100,
        scale: 0.85,
        duration: 1,
        opacity: 0,
      })
        .from(
          "#ContactMeArrowText",
          { x: -100, duration: 1, opacity: 0 },
          "-=0.5"
        )
        .from(
          ".socialMediaCard",
          {
            opacity: 0,
            x: -400,
            duration: 1,
            stagger: 0.3,
            ease: "back",
          },
          "-=0.5"
        );

      ScrollTrigger.create({
        trigger: "#contactMeParagraph",
        start: "top 75%",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    };

    const ctx = gsap.context(animateSocialMediaCards, contactMeSection);
    return () => ctx.revert();
  }, []);
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
