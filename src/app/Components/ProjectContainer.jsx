import React, {
  useContext,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
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

  const projectSectionRef = useRef();
  const imagesContainerRef = useRef();
  const isAnimatingRef = useRef(false);

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
        .from(
          ".Btn1, .Btn2",
          { x: (i) => (i ? 50 : -50), opacity: 0, duration: 1, stagger: 0.1 },
          "-=1"
        );

      ScrollTrigger.create({
        trigger: ".projectTitle",
        start: isDesktop ? "top 75%" : "top 90%",
        animation: tl,
        toggleActions: "play none none reverse",
      });
    },
    { scope: projectSectionRef }
  );

  const toggleImages = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const fontArrow = document.querySelector(`#fontArrow${index}`);
    const containerElement = imagesContainerRef.current;

    if (imagesShown) {
      fontArrow.style.transform = "rotateZ(0)";
      gsap.to(containerElement, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setImagesShown(false);
          isAnimatingRef.current = false;
        },
      });
      gsap.to(".containerImage", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
      });
    } else {
      setImagesShown(true);
      fontArrow.style.transform = "rotateZ(45deg)";

      gsap.set(containerElement, { height: "auto", opacity: 1 });
      gsap.set(".containerImage", { y: 80, opacity: 0 });

      gsap.from(containerElement, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      gsap.to(".containerImage", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.2,
      });
    }
  }, [imagesShown, index]);

  const memoizedImages = useMemo(
    () =>
      Object.values(images).map((value, index) => (
        <Image
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
      )),
    [images, title]
  );

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
      <div
        ref={projectSectionRef}
        className={`projectContainer ${isEvenIndex ? "flex-row-reverse" : ""}`}
      >
        <Image
          src={imageSrc}
          width={400}
          height={250}
          alt={`Project ${index} Svg`}
          className={`SvgBubble absolute z-0 w-[45vw] scale-y-90 -bottom-10 ${
            isEvenIndex ? "left-5" : "right-5"
          }`}
        />

        <div className="image-container">
          <Image
            src={projectImageSrc}
            className={`projectImage ${
              isEvenIndex ? "object-right" : "object-left"
            }`}
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
      <div
        ref={imagesContainerRef}
        className="imagesDivContainer"
        style={{ height: imagesShown ? "auto" : 0, overflow: "hidden" }}
      >
        <div className="imageContainer">{memoizedImages}</div>
      </div>
    </div>
  );
};

export default ProjectContainer;
