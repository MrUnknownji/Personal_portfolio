"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { AppContext } from "../Contexts/AppProvider";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ThankYou = () => {
  const thanksRef = useRef();
  const { isDesktop } = useContext(AppContext);

  useGSAP(
    () => {
      const createAnimation = (trigger, start, animations) => {
        const tl = gsap.timeline();
        animations.forEach(({ from, to, id, offset = "" }) => {
          tl.fromTo(id, from, { ...to, duration: 1 }, offset);
        });
        ScrollTrigger.create({
          trigger,
          start,
          animation: tl,
          toggleActions: "play none none reverse",
        });
      };

      const animations = [
        {
          trigger: "#ThanksDiv",
          start: isDesktop ? "top center" : "top 80%",
          animations: [
            {
              id: "#ThanksImage",
              from: { scale: 2, opacity: 0, borderRadius: 0 },
              to: { opacity: 1, borderRadius: "50px", scale: 1 },
            },
            {
              id: "#ThanksPara",
              from: { x: -100, opacity: 0 },
              to: { x: 0, opacity: 1 },
              offset: "-=0.5",
            },
            {
              id: "#Regards",
              from: { x: 100, opacity: 0 },
              to: { x: 0, opacity: 1 },
              offset: "-=0.5",
            },
            {
              id: "#GoToTopButton",
              from: { y: 50, opacity: 0 },
              to: { y: 0, opacity: 1 },
              offset: "-=0.5",
            },
          ],
        },
        {
          trigger: "#copyrightDiv",
          start: "top 95%",
          animations: [
            {
              id: "#copyrightTxt",
              from: { x: -100, opacity: 0 },
              to: { x: 0, opacity: 1 },
            },
            {
              id: "#developerTxt",
              from: { x: 100, opacity: 0 },
              to: { x: 0, opacity: 1 },
              offset: "-=0.5",
            },
          ],
        },
      ];

      animations.forEach(({ trigger, start, animations }) =>
        createAnimation(trigger, start, animations)
      );
    },
    { scope: thanksRef }
  );

  return (
    <div ref={thanksRef}>
      <div id="ThanksDiv" className="ThanksDiv">
        <Image
          id="ThanksImage"
          src={require("../Assets/ThankYou/ThankYou.jpg")}
          width={500}
          height={500}
          alt="Thank You"
        />
        <p id="ThanksPara">
          {`Thank you for exploring my portfolio! I'm thrilled by the boundless
          possibilities within the realm of technology and development. Whether
          you're keen on collaboration for a project, engaging in discussions
          about the latest tech trends, or simply dropping a greeting, I'm just
          a click away.`}
        </p>
        <div id="Regards" className="regardsDiv">
          <p className="w-fit">
            Best regards,
            <br />
            Sandeep Kumar
          </p>
        </div>
        <div className="topBtnDiv">
          <GsapMegnetic>
            <Link id="GoToTopButton" href="#home">
              <button className="greenBtn topBtn">
                <ArrowUpwardRoundedIcon />
              </button>
            </Link>
          </GsapMegnetic>
        </div>
      </div>
      <div id="copyrightDiv" className="relative">
        <p id="copyrightTxt">© 2023 Sandeep Kumar. All rights reserved</p>
        <p id="developerTxt">Designed and developed by Sandeep Kumar</p>
      </div>
    </div>
  );
};

export default ThankYou;
