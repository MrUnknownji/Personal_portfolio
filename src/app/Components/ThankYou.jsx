"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMegnetic from "./GsapMegnetic";
// import ChangeTheme from "./ChangeTheme";

// const isMobile =
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
const isWindows = /Windows/i.test(navigator.userAgent);

const ThankYou = () => {
  const ThanksRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.fromTo(
      "#ThanksImage",
      {
        scale: 2,
        opacity: 0,
        borderRadius: 0,
      },
      {
        opacity: 1,
        borderRadius: "50px",
        scale: 1,
        duration: 1,
      }
    )
      .fromTo(
        "#ThanksPara",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.5"
      )
      .fromTo(
        "#Regards",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.5"
      )
      .fromTo(
        "#GoToTopButton",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.5"
      );
    ScrollTrigger.create({
      trigger: "#ThanksDiv",
      start: isWindows ? "top center" : "top 80%",
      animation: tl,
      toggleActions: "play none none reverse",
    });

    tl2
      .fromTo(
        "#copyrightTxt",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        "#developerTxt",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          duration: 1,
          opacity: 1,
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
                <p>
                  <ArrowUpwardRoundedIcon />
                </p>
              </button>
            </Link>
          </GsapMegnetic>
        </div>
      </div>
      <div id="copyrightDiv" className="relative">
        <p id="copyrightTxt">© 2023 Sandeep Kumar. All rights reserved</p>
        <p id="developerTxt">Designed and developed by Sandeep Kumar</p>
        {/* <div className="absolute bottom-[50%] right-5 translate-y-[50%]">
          <ChangeTheme />
        </div> */}
      </div>
    </div>
  );
};

export default ThankYou;
