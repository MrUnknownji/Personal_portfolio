"use client";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import GsapMegnetic from "./GsapMegnetic";

const Header = () => {
  const headerSection = useRef();
  const prevScrollPosRef = useRef(0);
  const [IsLoading, setLoading] = useState(true);

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

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    const ctx = gsap.context(() => {
      gsap.from(".LogoBtn", {
        x: -100,
        opacity: 0,
        backgroundColor: "blue",
        color: "white",
        duration: 2,
        delay: 2.65,
        filter: "invert(1)",
        ease: "back",
      });
      gsap.from("ul", {
        x: 100,
        opacity: 0,
        duration: 2,
        delay: 2.65,
        ease: "back",
      });
    }, headerSection);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2650);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div
      className={"header"}
      ref={headerSection}
      style={{ visibility: IsLoading ? "hidden" : "visible" }}
    >
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
