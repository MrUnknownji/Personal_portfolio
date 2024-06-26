"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useMemo, useContext } from "react";
import { SkillArr, skillHeadingArr } from "./Arrays";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DeviceTypeContext } from "../Contexts/DeviceTypeProvider";

const Skills = () => {
  const skillContainer = useRef();
  const { isDesktop } = useContext(DeviceTypeContext);

  const skillsList = useMemo(() => {
    return SkillArr.map((value, i) => (
      <div
        key={i}
        id={`skill_sub_div${i}`}
        className={`skill_sub_div ${i % 2 === 1 ? "bg-white" : "bg-black"}`}
        onMouseEnter={(item) => {
          isDesktop && (item.currentTarget.style.transform = "scale(1.25)");
        }}
        onMouseLeave={(item) => {
          isDesktop && (item.currentTarget.style.transform = "scale(1)");
        }}
        onClick={() => {
          window.open(value.url);
        }}
      >
        <Image
          className="skillImage"
          src={require(`../Assets/Skills/${value.name}`)}
          width={100}
          height={100}
          alt={value.Text}
          loading="lazy"
          style={value.name === "java-vertical.svg" ? { padding: 8 } : value.name === "python-logo-only.svg" ? { padding: 6, paddingTop:7 } : {}}
        />
        {isDesktop && (
          <div className="skillTextOverlay">
            <h4 className="skillsTextPC">{value.Text}</h4>
          </div>
        )}
        {!isDesktop && <h4 className="skillsTextMobile">{value.Text}</h4>}
      </div>
    ));
  }, [isDesktop]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".skillChar", { y: 10, opacity: 0, stagger: 0.05 }).from(
        ".skill_sub_div",
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
        },
        "-=1"
      );
      ScrollTrigger.create({
        trigger: ".skill",
        start: "top 75%",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    });
    !isDesktop &&
      gsap.fromTo(
        ".skillsTextMobile",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 2, repeat: -1, yoyo: true }
      );
    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <div className="skill" ref={skillContainer}>
      <h5>
        {skillHeadingArr.map((value, index) => (
          <span className="skillHeadingWords" key={index}>
            {" "}
            {value.split("").map((char, charIndex) => (
              <span className="skillChar inline-block" key={charIndex}>
                {char}
              </span>
            ))}
          </span>
        ))}
      </h5>
      <div className="skillsListContainer">{skillsList}</div>
      <div>
        <hr className="py-1" />
      </div>
    </div>
  );
};

export default Skills;
