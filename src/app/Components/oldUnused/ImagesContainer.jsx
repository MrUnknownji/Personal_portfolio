import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useMemo, useRef } from "react";

const ImagesContainer = ({ title, images, setViewerImage, setViewImage }) => {
  const allImages = Object.values(images);
  const containerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        containerRef.current,
        {
          y: -100,
          height: 0,
          opacity: 0,
        },
        { opacity: 1, y: 0, height: "100%", duration: 1 }
      ).fromTo(
        ".containerImage",
        {
          y: 80,
          opacity: 0,
          stagger: 0.2,
        },
        { opacity: 1, y: 0 },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  const memoizedImages = useMemo(() => {
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
  }, [allImages, setViewImage, title, setViewerImage]);

  return (
    <div ref={containerRef} className="imagesDivContainer h-full">
      <div className="imageContainer">{memoizedImages}</div>
    </div>
  );
};

export default ImagesContainer;
