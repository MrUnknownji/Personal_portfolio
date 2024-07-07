import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { animations } from "./GsapAnimations/GsapAnimations";

const SocialMediaCard = ({ value, index }) => {
  const ref = useRef();
  useGSAP(
    () => {
      animations.socialMediaCard.init(ref);
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
