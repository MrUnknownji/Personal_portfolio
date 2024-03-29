"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Loading from "./loading";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import ContactForm from "./Components/ContactForm";
import ThankYou from "./Components/ThankYou";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ImageProvider from "./Contexts/ImageContext/ImageProvider";
import CustomThemeProvider from "./Contexts/ImageContext/CustomThemeProvider";
import Ring from "./Components/elements/Ring";
import FlexibleDragAndDrop from "./Components/elements/FlexibleDragAndDrop";
import PinnedFan from "./Components/elements/PinnedFan";
import { Meteors } from "./Components/ui/meteors";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef();
  const [IsLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const headingAnimation = () => {
      document.querySelectorAll(".heading").forEach((value, index) => {
        const anim = gsap.from(`#heading${index}`, {
          y: 50,
          opacity: 0,
          duration: 1,
        });
        ScrollTrigger.create({
          trigger: `#heading${index}`,
          start: "top 80%",
          animation: anim,
          toggleActions: "play none none reverse",
        });
      });
    };

    const ctx = gsap.context(headingAnimation, ref);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2650);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []);

  return IsLoading ? (
    <Loading />
  ) : (
    <CustomThemeProvider>
      <ImageProvider>
        <Meteors number={30} className="" />
        <FlexibleDragAndDrop />
        <PinnedFan />
        <HeroSection />
        <Skills />
        <Projects />
        <hr className="mt-10" />
        <AboutMe />
        <hr className="mt-10" />
        <ContactMe />
        <ContactForm />
        <ThankYou />
        {/* <Ring /> */}
      </ImageProvider>
    </CustomThemeProvider>
  );
}
