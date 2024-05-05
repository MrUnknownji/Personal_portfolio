"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ContactFormBg from "../Assets/ContactForm/ContactFormBg.jpg";
import Form from "./Form";

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
          ".SvgBubble",
          {
            opacity: 0,
            scale: 0,
            duration: 0.8,
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
    <div className="bg-center bg-cover relative">
      <Image
        src={
          "https://lh3.googleusercontent.com/pw/AP1GczPi56l8E0ntfCes8XbR4IHdGzO4xvn2hIVwekyWQ5DX5N887pZlNFQmWSprzw78di91HT9T02PlbPY1Y6C9_U8wYlb6GZ-HaLLSjdUZVnpWykoujtIEOBNLUorvuciBTGgXDIU8jOyt-TB9So78cXFsYCCLjxO6ckdGXjxsXP85d-MtpisTBQJ2VLNwgXMr9VIIrKQ-5uPsmEfFHM70qdNaKbAja3y1U_v9IJ-HkkTF82rgzfIkMi3ZNZoeXCu1cu2H3b2YlT2VseeNth4RHc_nWBqpgxeyXn0GbzINdZAIut4gfoSS6ggcga1BnY8j9bIFZKveAR2GbRFkHAZyBaQF48dgU5hXP2eCjRLx74CWs8EeDAMy4uqs6Y6H-rdBLN35X1oWmFuBtTUbFoH2ucdgfTWoKlDHfiZ0GUc01OvxtCGQLitlCn4zAOi-U1MN4TK8tEkn6jGbCX7ddO_7lALv89XeIgEAtO5FKy0lo-ZCBAbWTLNnWAywN7cdbLbvsNEwINkZE8V0flx5CTAKjsCELV-wU3FDtiPWloqrBNREGNCGepQ49VplzKffXt80w_6x2dG-ox6pfg44J1RYzb0Fqo2ijCASsM21iHsKKZXttEzqH-lVj1_physSzGUSLzpUi2qMR9zRLEeVEST6-eksHRHHKz5EIgOT6_02g0ncdhnNmgkwKyyTC71iDukoamTx6tSBVYs59f5mP0zD0xGzNw-pao0jZSh7L4b4Ez-ehjGC7u6m_zX61NAddokxSdEs2r3I80SwdK6p2m7TScoEdjDO2hLMo6DCIkSJ6v7srnT0nyNTdr4puu-bZjPEU96EwxhCiZJaduk2ZzmcA1du9MMujaxBNnNlqouNc77qSbMzZcZ14w43opH8TMuGKylf1aRlr0vMaauoDLqVGjln2mDq=w1659-h948-s-no-gm?authuser=0"
        }
        alt=""
        width={1080}
        height={720}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />

      <div className="contactForm" ref={formSection}>
        <div
          className="absolute w-[60vw] right-0 z-10 top-[50%]"
          style={{ transform: "translateY(-50%)" }}
        >
          <Image
            className="formSvg object-contain"
            src={require("../Assets/ContactForm/blob8.svg")}
            width={1000}
            height={1000}
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
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
