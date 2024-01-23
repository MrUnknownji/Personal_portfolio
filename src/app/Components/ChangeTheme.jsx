import React, { useContext } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import GsapMegnetic from "./GsapMegnetic";
import { CustomThemeContext } from "../Contexts/ImageContext/CustomThemeProvider";

const ChangeTheme = () => {
  const { darkTheme, updateTheme } = useContext(CustomThemeContext);
  // const { updateFlag } = useContext(ImageContext);

  // const elements = document.querySelectorAll(
  //   ".header, .heroHeadingContainer, #heading0, .SvgBubble, .formSvg, .heroSvg, .projectInfoDiv, .aboutMe, .contactMeSection, #contactFormParaTop, #contactFormSendBtn, #copyrightDiv, .topBtnDiv, #ThanksPara, .regardsDiv"
  // );

  // const Outerdiv = document.querySelector("#topDiv");
  // Outerdiv.style.transition = "backdrop-filter 1s";

  // for (const element of elements) {
  //   element.style.transition = "filter 1s";
  // }

  const btnHandler = () => {
    updateTheme();
    // updateFlag();

    // if (darkTheme) {
    //   Outerdiv.style.backdropFilter = "invert(0.95)";
    //   for (const element of elements) {
    //     element.style.filter = "invert(100%)";
    //   }
    // } else {
    //   Outerdiv.style.backdropFilter = "invert(0)";
      // for (const element of elements) {
      //   element.style.filter = "invert(0%)";
      // }
    // }
  };
  return (
    <GsapMegnetic>
      <div className="themeBtn">
        <button onClick={btnHandler}>
          {darkTheme ? <NightlightRoundedIcon /> : <WbSunnyRoundedIcon />}
        </button>
      </div>
    </GsapMegnetic>
  );
};

export default ChangeTheme;
