"use client";
import React, { useContext, useMemo } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AppContext } from "../Contexts/AppProvider";
import { SkillArr, skillHeadingArr } from "../Assets/Data/Arrays";
import { animations } from "./GsapAnimations/GsapAnimations";

const Skills = () => {
  const { isDesktop } = useContext(AppContext);

  const skillsList = useMemo(
    () =>
      SkillArr.map((skill, index) => (
        <SkillItem
          key={index}
          skill={skill}
          index={index}
          isDesktop={isDesktop}
        />
      )),
    [isDesktop]
  );

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animations.textReveal(".skillChar")).add(
      animations.staggerChildren(".skill_sub_div"),
      "-=1"
    );

    animations.createScrollTrigger(".skill_sub_div", tl, {
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse",
    });

    if (!isDesktop) {
      animations.fadeIn("#skill", { duration: 2, repeat: -1, yoyo: true });
    }
  }, [isDesktop]);

  return (
    <div id="skill" className="skill">
      <h4>
        {skillHeadingArr.map((word, wordIndex) => (
          <span className="skillHeadingWords" key={wordIndex}>
            {" "}
            {word.split("").map((char, charIndex) => (
              <span className="skillChar inline-block" key={charIndex}>
                {char}
              </span>
            ))}
          </span>
        ))}
      </h4>
      <div className="skillsListContainer">{skillsList}</div>
      <div>
        <hr className="py-1" />
      </div>
    </div>
  );
};

export default Skills;

const SkillItem = ({ skill, index, isDesktop }) => {
  const handleMouseEnter = (e) => {
    if (isDesktop) {
      e.currentTarget.style.scale = "1.25";
    }
  };

  const handleMouseLeave = (e) => {
    if (isDesktop) {
      e.currentTarget.style.scale = "1";
    }
  };

  const handleClick = () => {
    window.open(skill.url);
  };

  const getImageStyle = () => {
    if (skill.name === "java-vertical.svg") {
      return { padding: 8 };
    } else if (skill.name === "python-logo-only.svg") {
      return { padding: 6, paddingTop: 7 };
    }
    return {};
  };

  return (
    <div
      id={`skill_sub_div${index}`}
      className={`skill_sub_div ${index % 2 === 1 ? "bg-white" : "bg-black"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Image
        className="skillImage"
        src={require(`../Assets/Skills/${skill.name}`)}
        width={100}
        height={100}
        alt={skill.Text}
        loading="lazy"
        style={getImageStyle()}
      />
      {isDesktop ? (
        <div className="skillTextOverlay">
          <h4 className="skillsTextPC">{skill.Text}</h4>
        </div>
      ) : (
        <h4 className="skillsTextMobile">{skill.Text}</h4>
      )}
    </div>
  );
};
