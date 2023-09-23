"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GsapMegnetic from "./GsapMegnetic";
import ContactFormBg from "../Assets/ContactForm/ContactFormBg.jpg"

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formSection = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".contactForm", {
        opacity: 0,
        y: 50,
        duration: 0.6,
      })
        .from(
          "form",
          {
            opacity: "0",
            y: 50,
            duration: 0.4,
          },
          "-=0.2"
        )
        .from(
          "form input",
          {
            opacity: 0,
            x: -20,
            stagger: 0.2,
            duration: 0.4,
          },
          "-=0.2"
        )
        .from(
          "#textArea",
          {
            opacity: 0,
            x: -20,
            duration: 0.4,
          },
          "-=0.2"
        )
        .from(
          "#contactFormPara",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          "#contactFormSendBtn",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
          },
          "-=0.3"
        );
      ScrollTrigger.create({
        trigger: ".contactForm",
        start: "top center",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    });

    const SendBtn = document.getElementById("contactFormSendBtn");

    const handleMouseEnter = () => {
      gsap.to("#Arrow", { marginLeft: 5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to("#Arrow", { marginLeft: 0, duration: 0.3 });
    };

    SendBtn.addEventListener("mouseenter", handleMouseEnter);
    SendBtn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      SendBtn.removeEventListener("mouseenter", handleMouseEnter);
      SendBtn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div
      className="contactForm"
      ref={formSection}
      style={{ backgroundImage: `url(${ContactFormBg.src})` }}
    >
      <div
        className="absolute w-[60vw] right-0 z-10 top-[50%]"
        style={{ transform: "translateY(-50%)" }}
      >
        <Image
          className="SvgBubble object-contain"
          layout="responsive"
          src={require("../Assets/ContactForm/blob8.svg")}
          alt="ContactFormSvg"
        />
      </div>
      <h2 id="heading3" className="heading contactFormHeading">
        Suggestion/Feedback
      </h2>
      <p id="contactFormParaTop" className="topPara">
        {`Have a question, feedback, or a project in mind? I'd love to hear from
        you. Your input is invaluable. Just drop your message in the form, and
        I'll get back to you as soon as possible`}
      </p>
      <div className="formAndDesc">
        <form>
          <input id="input1" type="email" placeholder="Email" required />
          <input id="input2" type="text" placeholder="Subject" />
          <textarea
            id="textArea"
            rows={10}
            placeholder="Description"
            required
          />
        </form>

        <div className="flex gap-10 flex-col z-10">
          <p id="contactFormPara" className="px-10">
            {`Have a question, feedback, or a project in mind? I'd love to hear from
        you. Your input is invaluable. Just drop your message in the form, and
        I'll get back to you as soon as possible`}
          </p>
          <GsapMegnetic>
            <button id="contactFormSendBtn" className="sendBtn mx-auto">
              Send{" "}
              <font id="Arrow" className="inline-block">
                →
              </font>
            </button>
          </GsapMegnetic>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
