import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

const SocialMediaCard = ({ value, index }) => {
  const ref = useRef();
  useLayoutEffect(() => {
    const animateSocialMediaCard = () => {
      const currentElem = ref.current;
      gsap.from(currentElem, {
        opacity: 0,
        y: index % 2 === 0 ? -100 : 100,
        duration: 1.5,
        ease: "ease",
        scrollTrigger: {
          trigger: currentElem,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      currentElem.addEventListener("mouseenter", () => {
        currentElem.style.transform = "rotateZ(0)";
      });
      currentElem.addEventListener("mouseleave", () => {
        currentElem.style.transform = "rotateZ(-10deg)";
      });
    };
    const ctx = gsap.context(animateSocialMediaCard, ref);
    return () => ctx.revert();
  });
  return (
    <div className="socialMediaCard" ref={ref}>
      <Image
        src={require(`../Assets/SocialMedia/${value.image}`)}
        width={50}
        height={50}
        alt={value.title}
      />
      <Link target={"_blank"} href={value.url}>
        <button className="greenTransparentBtn">{value.title}</button>
      </Link>
    </div>
  );
};

export default SocialMediaCard;
