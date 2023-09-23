import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const ImagesContainer = ({ title, images, setViewerImage, setViewImage }) => {
  const allImages = Object.values(images);
  
  const ref = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.from(ref.current, {
      y: -100,
      height: 0,
      opacity: 0,
      duration: 1,
    }).from(
      ".containerImage",
      {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      },
      "-=0.3"
    );

    const ctx = gsap.context(tl, ref);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className="imagesDivContainer h-full">
      <div className="imageContainer">
        {allImages.map((value, index) => (
          <Image
            id={`image-${index}`}
            key={index}
            src={require(`../Assets/Project/${title}/${value}`)}
            layout="responsive"
            alt={title}
            className="containerImage image"
            onClick={() => {
              document.body.style.overflow = "hidden";
              setViewerImage(value);
              setViewImage(true);
              setTimeout(() => {
                document.querySelector("#image-viewer div").style.top = `${window.scrollY}px`;
              }, 100);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesContainer;
