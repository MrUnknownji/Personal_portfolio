"use client";
import { Suspense, useLayoutEffect, useRef } from "react";
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
// import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const ref = useRef();
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
        gsap.from(`#heading${index}`, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `#heading${index}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    };

    const ctx = gsap.context(headingAnimation, ref);

    return () => {
      ctx.revert();
      // if (scroll) {
      //   scroll.destroy();
      // }
    };
  }, []);
  return (
    <div ref={ref}>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}
