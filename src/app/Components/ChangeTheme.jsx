import React, { useState } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";

const ChangeTheme = () => {
  const [isDark, setIsDark] = useState(true);
  const btnHandler = () => {
    const elements = document.querySelectorAll(
      ".header, .heroHeadingContainer, .SvgBubble, .projectInfoDiv, .aboutMe, .contactMeSection, #contactFormParaTop, #contactFormSendBtn, #copyrightDiv, .topBtnDiv, #ThanksPara, .regardsDiv"
    );
    const div = document.querySelector(".topLevelDiv");
    div.style.transition = "all 1s";

    for (const element of elements) {
      element.style.transition = "filter 1s";
    }
    if (isDark) {
      setIsDark(false);
      div.style.backdropFilter = "invert(1)";
      for (const element of elements) {
        element.style.filter = "invert(100%)";
      }
    } else {
      setIsDark(true);
      div.style.backdropFilter = "invert(0)";
      for (const element of elements) {
        element.style.filter = "invert(0%)";
      }
    }
  };
  return (
    <button
      className={`themeBtn fixed top-20 right-10 cursor-pointer z-50 duration-1000 ${
        isDark ? "text-white" : "text-black"
      }`}
      onClick={btnHandler}
    >
      {isDark ? <NightlightRoundedIcon /> : <WbSunnyRoundedIcon />}
    </button>
  );
};

export default ChangeTheme;
