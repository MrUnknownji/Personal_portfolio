"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Form from "./Form";
import { useGSAP } from "@gsap/react";

const ContactForm = () => {
  const formSection = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const animations = [
        { target: ".contactForm", vars: { opacity: 0, y: 50, duration: 0.6 } },
        {
          target: "form",
          vars: { opacity: 0, y: 50, duration: 0.4 },
          position: "-=0.2",
        },
        {
          target: "form input",
          vars: { opacity: 0, x: -20, stagger: 0.2, duration: 0.4 },
          position: "-=0.2",
        },
        {
          target: "#Description",
          vars: { opacity: 0, x: -20, duration: 0.4 },
          position: "-=0.2",
        },
        {
          target: ".SvgBubble",
          vars: { opacity: 0, scale: 0, duration: 0.8 },
          position: "-=0.2",
        },
        {
          target: "#contactFormPara",
          vars: { opacity: 0, y: 20, duration: 0.5 },
          position: "-=0.3",
        },
        {
          target: "#contactFormSendBtn",
          vars: { opacity: 0, scale: 0.8, duration: 0.5 },
          position: "-=0.3",
        },
      ];

      animations.forEach(({ target, vars, position }) => {
        tl.from(target, vars, position);
      });

      ScrollTrigger.create({
        trigger: ".contactForm",
        start: "top center",
        animation: tl,
        toggleActions: "play none none reverse",
      });

      const SendBtn = document.getElementById("contactFormSendBtn");
      const handleMouseEnter = () =>
        gsap.to("#Arrow", { marginLeft: 5, duration: 0.3 });
      const handleMouseLeave = () =>
        gsap.to("#Arrow", { marginLeft: 0, duration: 0.3 });

      SendBtn.addEventListener("mouseenter", handleMouseEnter);
      SendBtn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        SendBtn.removeEventListener("mouseenter", handleMouseEnter);
        SendBtn.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: formSection }
  );

  return (
    <div className="bg-center bg-cover relative" ref={formSection}>
      <Image
        src={require("../Assets/ContactForm/ContactFormBg.jpg")}
        alt=""
        width={1080}
        height={720}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <div className="contactForm">
        <Image
          className="formSvg object-contain absolute w-[60vw] right-0 z-10 top-1/2 -translate-y-1/2"
          src={require("../Assets/ContactForm/blob8.svg")}
          width={1000}
          height={1000}
          alt="ContactFormSvg"
        />
        <h2 id="heading3" className="heading contactFormHeading">
          Suggestion/Feedback
        </h2>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
