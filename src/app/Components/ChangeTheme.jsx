import React, { useState } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import GsapMegnetic from "./GsapMegnetic";

const ChangeTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const btnHandler = () => {
    const elements = document.querySelectorAll(
      ".header, .heroHeadingContainer, #heading0, .SvgBubble, .formSvg, .heroSvg, .projectInfoDiv, .aboutMe, .contactMeSection, #contactFormParaTop, #contactFormSendBtn, #copyrightDiv, .topBtnDiv, #ThanksPara, .regardsDiv"
    );
    const Outerdiv = document.querySelector(".topLevelDiv");
    Outerdiv.style.transition = "backdrop-filter 1s";

    for (const element of elements) {
      element.style.transition = "filter 1s";
    }
    if (isDark) {
      setIsDark(false);
      Outerdiv.style.backdropFilter = "invert(0.95)";
      for (const element of elements) {
        element.style.filter = "invert(100%)";
      }
    } else {
      setIsDark(true);
      Outerdiv.style.backdropFilter = "invert(0)";
      for (const element of elements) {
        element.style.filter = "invert(0%)";
      }
    }
  };
  return (
    <GsapMegnetic>
      <div className="themeBtn">
        <button onClick={btnHandler}>
          {isDark ? <NightlightRoundedIcon /> : <WbSunnyRoundedIcon />}
        </button>
      </div>
    </GsapMegnetic>
  );
};

export default ChangeTheme;
