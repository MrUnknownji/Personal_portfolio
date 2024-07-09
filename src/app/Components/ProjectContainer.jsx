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
import { useGSAP } from "@gsap/react";
import { AppContext } from "../Contexts/AppProvider";
import { animations } from "./GsapAnimations/GsapAnimations";

const ProjectContainer = ({ project, index }) => {
  const [imagesShown, setImagesShown] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);
  const { isDesktop } = useContext(AppContext);

  const { title, desc, url, svg, images } = project;
  const isEvenIndex = index % 2 === 0;

  const svgSrc = require(`../Assets/Project/${title}/${svg}`);
  const projectImageSrc = require(`../Assets/Project/${title}/${images.DescHome}`);

  const projectSectionRef = useRef();
  const imagesContainerRef = useRef();
  const isAnimatingRef = useRef(false);

  useGSAP(
    () => {
      animations.projectContainer.init(projectSectionRef, isDesktop);
    },
    { scope: projectSectionRef }
  );

  const toggleImages = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    animations.projectContainer.toggleImages(
      imagesContainerRef,
      `fontArrow${index}`,
      imagesShown,
      () => {
        setImagesShown(!imagesShown);
        isAnimatingRef.current = false;
      }
    );
  }, [imagesShown, index]);

  const handleImageClick = useCallback((value) => {
    document.body.style.overflow = "hidden";
    setViewerImage(value);
    setViewImage(true);
  }, []);

  const closeImageViewer = useCallback(() => {
    document.body.style.overflowY = "auto";
    setViewImage(false);
  }, []);

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
          onClick={() => handleImageClick(value)}
        />
      )),
    [images, title, handleImageClick]
  );

  const ImageViewer = useCallback(
    () => (
      <div id="image-viewer">
        <div>
          <span id="close" onClick={closeImageViewer}>
            &times;
          </span>
          <Image
            src={require(`../Assets/Project/${title}/${viewerImage}`)}
            id="full-image"
            alt="Image"
          />
        </div>
      </div>
    ),
    [title, viewerImage, closeImageViewer]
  );

  return (
    <div>
      {viewImage && <ImageViewer />}
      <div
        ref={projectSectionRef}
        className={`projectContainer ${isEvenIndex ? "flex-row-reverse" : ""}`}
      >
        <Image
          src={svgSrc}
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
            <button className="normalBtn Btn2" onClick={toggleImages}>
              Images
              <span
                id={`fontArrow${index}`}
                className="inline-block fontArrow duration-300"
              >
                →
              </span>
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
