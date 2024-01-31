import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ImagesContainer from "./ImagesContainer";
import GsapMegnetic from "./GsapMegnetic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ImageViewer from "./ImageViewer";

const isWindows = /(Windows|Macintosh|Mac Os)/i.test(navigator.userAgent);

const ProjectContainer = ({ project, index }) => {
  const [imagesShown, setImagesShown] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);

  const { title, desc, url, svg, images } = project;
  const isEvenIndex = index % 2 === 0;

  const imageSrc = require(`../Assets/Project/${title}/${svg}`);
  const projectImageSrc = require(`../Assets/Project/${title}/${images.DescHome}`);
  const divClass = isEvenIndex ? "flex-row-reverse" : "";
  const imageClass = isEvenIndex ? "left-5" : "right-5";
  const imageOrigin = isEvenIndex ? "object-right" : "object-left";

  const projectSection = useRef();

  useLayoutEffect(() => {
    const animateProjects = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".SvgBubble",
        { scale: 0, opacity: 0 },
        { duration: 1, scale: 0.75, opacity: 1 }
      )
        .from(".projectTitle", { scale: 0.5, opacity: 0 }, "-=0.5")
        .from(".desc", { y: -50, opacity: 0 })
        .from(".image-container", { width: 0, duration: 2 }, "-=1")
        .from(".Btn1", { x: -50, opacity: 0, duration: 1 }, "-=1")
        .from(".Btn2", { x: 50, opacity: 0, duration: 1 }, "-=1");

      ScrollTrigger.create({
        trigger: ".projectTitle",
        start: isWindows ? "top 75%" : "top 90%",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    };

    const ctx = gsap.context(animateProjects, projectSection);
    return () => ctx.revert();
  }, []);

  const toggleImages = () => {
    const fontArrow = document.querySelector(`#fontArrow${index}`);
    if (imagesShown) {
      fontArrow.style.transform = "rotateZ(0)";
      gsap.to(".imagesDivContainer", {
        y: -100,
        height: 0,
        opacity: 0,
        duration: 1,
        onComplete: () => setImagesShown(!imagesShown),
      });
      gsap.to(".containerImage", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      });
    } else {
      fontArrow.style.transform = "rotateZ(45deg)";
      setImagesShown(!imagesShown);
    }
  };

  return (
    <div>
      {viewImage && (
        <ImageViewer
          title={title}
          viewerImage={viewerImage}
          setViewImage={setViewImage}
        />
      )}
      <div ref={projectSection} className={`projectContainer ${divClass}`}>
        <Image
          src={imageSrc}
          width={400}
          height={250}
          alt={`Project ${index} Svg`}
          className={`SvgBubble absolute z-0 w-[45vw] scale-y-90 -bottom-10" ${imageClass}`}
        />

        <div className="image-container">
          <Image
            src={projectImageSrc}
            className={`projectImage ${imageOrigin}`}
            alt="Reveal Image"
          />
        </div>

        <div className="projectInfoDiv">
          <h4 className="text-center projectTitle">{title}</h4>
          <p className="desc text-justify">{desc}</p>
          <div className="projectInfoDivBtnContainer">
            <GsapMegnetic>
              <Link href={url} target={"_blank"}>
                <button className="greenBtn Btn1">
                  Visit <RocketLaunchRoundedIcon />
                </button>
              </Link>
            </GsapMegnetic>
            <button className="Btn2" onClick={toggleImages}>
              <h5>
                Images{" "}
                <font
                  id={`fontArrow${index}`}
                  className="inline-block fontArrow duration-300"
                >
                  →
                </font>
              </h5>
            </button>
          </div>
        </div>
      </div>
      {imagesShown && (
        <ImagesContainer
          title={title}
          images={images}
          setViewImage={setViewImage}
          setViewerImage={setViewerImage}
        />
      )}
    </div>
  );
};

export default ProjectContainer;
