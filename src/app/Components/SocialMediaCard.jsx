import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const SocialMediaCard = ({ value, index }) => {
  const ref = useRef();
  useGSAP(
    () => {
      const currentElem = ref.current;
      currentElem.addEventListener("mouseenter", () => {
        gsap.to(currentElem, { scale: 1.1, duration: 1, ease: "back.out(4)" });
      });
      currentElem.addEventListener("mouseleave", () => {
        gsap.to(currentElem, { scale: 1, duration: 1, ease: "back.out(4)" });
      });
    },
    { scope: ref }
  );
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
