"use client";
import React, { useLayoutEffect, useRef } from "react";
import { SocialMediaInfo } from "./Arrays";
import gsap from "gsap";
import SocialMediaCard from "./SocialMediaCard";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
          "-=0.3"
        )
        .from(".socialMediaCard", {
          opacity: 0,
          x: -100,
          duration: 1,
          stagger: 0.5,
          ease: "ease",
        });

      ScrollTrigger.create({
        trigger: "#contactMeParagraph",
        start: "top 70%",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    };

    const ctx = gsap.context(animateSocialMediaCards, contactMeSection);
    return () => ctx.revert();
  }, []);
  return (
    <div id="contactme" className="contactMeSection" ref={contactMeSection}>
      <h1 id="heading2" className="heading">{`Let's Connect`}</h1>
      <p id="contactMeParagraph" className="contactMeParagraph">
        {`If you're looking to harness the power of web development for your
        projects or ventures, I'm here to help. Connect with me through my
        social handles to explore how we can collaborate on building
        cutting-edge websites and digital solutions. I'm excited to collaborate
        and help bring your digital dreams to life. Let's create something
        amazing together!`}
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
