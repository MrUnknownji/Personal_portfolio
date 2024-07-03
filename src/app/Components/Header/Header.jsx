"use client";
import React, { useCallback, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import GsapMegnetic from "../GsapAnimations/GsapMegnetic";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const headerSection = useRef();
  const prevScrollPosRef = useRef(0);

  const scrollFunction = useCallback(() => {
    let currentScrollPos = window.scrollY;
    const headerStyle = headerSection.current.style;
    headerStyle.transition = "transform 0.7s";
    if (currentScrollPos > prevScrollPosRef.current) {
      headerStyle.transform = "translateY(-80px)";
    } else {
      headerStyle.transform = "translateY(0)";
    }
    prevScrollPosRef.current = currentScrollPos;
  }, []);

  useGSAP(
    () => {
      window.addEventListener("scroll", scrollFunction);
      gsap.from(".LogoBtn", {
        x: -100,
        opacity: 0,
        backgroundColor: "blue",
        color: "white",
        duration: 2,
        filter: "invert(1)",
        ease: "back",
      });
      gsap.from("ul", {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "back",
      });
    },
    { scope: headerSection }
  );
  return (
    <div className={"header"} ref={headerSection}>
      <div>
        <GsapMegnetic>
          <button className="LogoBtn">{`Sandeep's Portfolio`}</button>
        </GsapMegnetic>
      </div>
      <div>
        <ul className="flex items-center justify-between">
          <NavItem href="#home" label="Home" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#aboutme" label="About Me" />
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ href, label }) => (
  <li>
    <Link href={href}>
      <GsapMegnetic>
        <button className="transparentBtn">{label}</button>
      </GsapMegnetic>
    </Link>
  </li>
);
export default Header;
