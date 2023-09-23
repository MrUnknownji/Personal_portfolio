import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

const SocialMediaCard = ({ value, index }) => {
  const ref = useRef();
  useLayoutEffect(() => {
    const animateSocialMediaCard = () => {
      const currentElem = ref.current;
      currentElem.addEventListener("mouseenter", () => {
        gsap.to(currentElem, { scale: 1.1, duration: 1, ease: "back.out(4)" });
      });
      currentElem.addEventListener("mouseleave", () => {
        gsap.to(currentElem, { scale: 1, duration: 1, ease: "back.out(4)" });
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
