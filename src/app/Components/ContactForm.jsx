import React, { useRef, memo } from "react";
import Image from "next/image";
import Form from "./Form";
import { useGSAP } from "@gsap/react";
import { animations } from "./GsapAnimations/GsapAnimations";

const ContactForm = memo(() => {
  const formSection = useRef();

  useGSAP(
    () => {
      animations.contactForm.init(formSection);
      return animations.contactForm.setupSendButtonHover();
    },
    { scope: formSection }
  );

  return (
    <div className="bg-center bg-cover relative" ref={formSection}>
      <Image
        src={require("../Assets/ContactForm/ContactFormBg.jpg")}
        alt="Contact Form Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="contactForm">
        <Image
          className="formSvg object-contain absolute w-[60vw] right-0 z-10 top-1/2 -translate-y-1/2"
          src={require("../Assets/ContactForm/blob8.svg")}
          width={1000}
          height={1000}
          alt="Contact Form SVG"
        />
        <h3 id="heading3" className="heading contactFormHeading">
          Suggestion/Feedback
        </h3>
        <Form />
      </div>
    </div>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
