"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useMemo } from "react";
import { SkillArr, skillHeadingArr } from "./Arrays";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillContainer = useRef();

  const skillsList = useMemo(() => {
    return SkillArr.map((value, i) => (
      <div
        key={i}
        id={`skill_sub_div${i}`}
        className={`skill_sub_div ${i % 2 === 1 ? "bg-white" : "bg-black"}`}
      >
        <Image
          src={require(`../Assets/Skills/${value.name}`)}
          layout="responsive"
          alt={value.Text}
          loading="lazy"
        />
        <h4 className="skillsText">{value.Text}</h4>
      </div>
    ));
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".skillChar", { y: 50, opacity: 0, stagger: 0.05 }).from(
        ".skill_sub_div",
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          scrub: true,
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
    return () => ctx.revert();
  }, []);

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
