import React, { useContext, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppContext } from "../Contexts/AppProvider";

const ProjectContainer = ({ project, index }) => {
  const [imagesShown, setImagesShown] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);
  const { isDesktop } = useContext(AppContext);

  const { title, desc, url, svg, images } = project;
  const isEvenIndex = index % 2 === 0;

  const imageSrc = require(`../Assets/Project/${title}/${svg}`);
  const projectImageSrc = require(`../Assets/Project/${title}/${images.DescHome}`);
  const divClass = isEvenIndex ? "flex-row-reverse" : "";
  const imageClass = isEvenIndex ? "left-5" : "right-5";
  const imageOrigin = isEvenIndex ? "object-right" : "object-left";

  const projectSectionRef = useRef();
  const imagesContainerRef = useRef();

  useGSAP(
    () => {
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
        start: isDesktop ? "top 75%" : "top 90%",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    },
    { scope: projectSectionRef }
  );

  const toggleImages = async () => {
    const fontArrow = document.querySelector(`#fontArrow${index}`);
    if (imagesShown) {
      await gsap.to(imagesContainerRef.current, {
        y: -100,
        height: 0,
        opacity: 0,
        duration: 1,
        onComplete: () => setImagesShown(false),
      });
      fontArrow.style.transform = "rotateZ(0)";
      gsap.to(".containerImage", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
      });
    } else {
      setImagesShown(true);
      fontArrow.style.transform = "rotateZ(45deg)";
      gsap.fromTo(
        imagesContainerRef.current,
        {
          y: -100,
          height: "0%",
          opacity: 0,
        },
        {
          y: 0,
          height: "100%",
          opacity: 1,
          duration: 1,
        }
      );
    }
  };

  const memoizedImages = useMemo(() => {
    const allImages = Object.values(images);
    return allImages.map((value, index) => (
      <Image
        id={`image-${index}`}
        key={index}
        src={require(`../Assets/Project/${title}/${value}`)}
        width={700}
        height={700}
        alt={title}
        loading="lazy"
        className="containerImage image"
        onClick={() => {
          document.body.style.overflow = "hidden";
          setViewerImage(value);
          setViewImage(true);
        }}
      />
    ));
  }, [images, title]);

  const ImageViewer = () => (
    <div id="image-viewer">
      <div>
        <span
          id="close"
          onClick={() => {
            document.body.style.overflowY = "auto";
            setViewImage(false);
          }}
        >
          &times;
        </span>
        <Image
          src={require(`../Assets/Project/${title}/${viewerImage}`)}
          id="full-image"
          alt="Image"
        />
      </div>
    </div>
  );

  return (
    <div>
      {viewImage && <ImageViewer />}
      <div ref={projectSectionRef} className={`projectContainer ${divClass}`}>
        <Image
          src={imageSrc}
          width={400}
          height={250}
          alt={`Project ${index} Svg`}
          className={`SvgBubble absolute z-0 w-[45vw] scale-y-90 -bottom-10 ${imageClass}`}
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
              <Link href={url} target="_blank">
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
        <div ref={imagesContainerRef} className="imagesDivContainer h-full">
          <div className="imageContainer">{memoizedImages}</div>
        </div>
      )}
    </div>
  );
};

export default ProjectContainer;
