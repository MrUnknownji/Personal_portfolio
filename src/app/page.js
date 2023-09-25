"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Loading from "./loading";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import ContactForm from "./Components/ContactForm";
import ThankYou from "./Components/ThankYou";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ChangeTheme from "./Components/ChangeTheme";
// import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef();
  const [IsLoading, setLoading] = useState(true);
  useLayoutEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    // });

    // const disableScrollBtn = Array.from(
    //   document.getElementsByClassName("containerImage")
    // );

    // disableScrollBtn.map((value, index) => {
    //   value.addEventListener("click", () => {
    //     scroll.destroy();
    //   });
    // });

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
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
      // if (scroll) {
      //   scroll.destroy();
      // }
    };
  }, []);
  return IsLoading ? (
    <Loading />
  ) : (
    <div ref={ref}>
      <ChangeTheme />
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <hr className="mt-10" />
      <AboutMe />
      <hr className="mt-10" />
      <ContactMe />
      <ContactForm />
      <ThankYou />
    </div>
  );
}
