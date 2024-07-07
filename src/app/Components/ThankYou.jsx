"use client";
import Image from "next/image";
import React, { useContext, useRef } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { AppContext } from "../Contexts/AppProvider";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";
import { useGSAP } from "@gsap/react";
import { animations } from "./GsapAnimations/GsapAnimations";

const ThankYou = () => {
  const thanksRef = useRef();
  const { isDesktop } = useContext(AppContext);

  const goToTop = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useGSAP(
    () => {
      animations.thankYou.init(isDesktop);
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
            <button
              id="GoToTopButton"
              className="greenBtn topBtn"
              onClick={() => goToTop()}
            >
              <ArrowUpwardRoundedIcon />
            </button>
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
