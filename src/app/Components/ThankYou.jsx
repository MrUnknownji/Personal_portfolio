"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMegnetic from "./GsapMegnetic";

const ThankYou = () => {
  const ThanksRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.from("#ThanksImage", {
      scale: 1.4,
      borderRadius: 0,
      duration: 1,
    })
      .from(
        "#ThanksPara",
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        "#Regards",
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        "#GoToTopButton",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

    ScrollTrigger.create({
      trigger: "#ThanksDiv",
      start: "top center",
      animation: tl,
      toggleActions: "play none none reverse",
    });

    tl2
      .from("#copyrightTxt", {
        x: -100,
        duration: 1,
        opacity: 0,
      })
      .from(
        "#developerTxt",
        {
          x: 100,
          duration: 1,
          opacity: 0,
        },
        "-=0.5"
      );
    ScrollTrigger.create({
      trigger: "#copyrightDiv",
      start: "top 95%",
      animation: tl2,
      toggleActions: "play none none reverse",
    });
  }, []);
  return (
    <div ref={ThanksRef}>
      <div id="ThanksDiv" className="ThanksDiv">
        <Image
          id="ThanksImage"
          src={require("../Assets/ThankYou/ThankYou.jpg")}
          width={500}
          height={500}
          alt="Thank You"
        />
        <p id="ThanksPara">
          {`Thank you for visiting my portfolio! I'm excited about the endless
          possibilities in the world of technology and development. Whether you're
          interested in collaborating on a project, discussing the latest tech
          trends, or just want to say hi, I'm just a click away.`}
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
                <p>
                  <ArrowUpwardRoundedIcon />
                </p>
              </button>
            </Link>
          </GsapMegnetic>
        </div>
      </div>
      <div id="copyrightDiv">
        <p id="copyrightTxt">© 2023 Sandeep Kumar. All rights reserved</p>
        <p id="developerTxt">Designed and developed by Sandeep Kumar</p>
      </div>
    </div>
  );
};

export default ThankYou;
