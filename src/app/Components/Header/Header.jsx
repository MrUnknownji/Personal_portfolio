import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import {
  animations,
  setupHeaderAnimation,
} from "../GsapAnimations/GsapAnimations";
import GsapMegnetic from "../GsapAnimations/GsapMegnetic";

const Header = () => {
  const headerRef = useRef();

  useEffect(() => {
    const cleanup = setupHeaderAnimation(headerRef);
    return cleanup;
  }, []);

  useGSAP(
    () => {
      animations.headerAnimations(headerRef.current);
    },
    { scope: headerRef }
  );

  return (
    <header ref={headerRef} className="header">
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
    </header>
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
