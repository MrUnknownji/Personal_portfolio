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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef();
  const [IsLoading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);

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
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []);
  return IsLoading ? (
    <Loading />
  ) : (
    <div id="top" ref={ref} style={{width:"100vw", overflowX:"hidden"}}>
      <Header />
      <HeroSection />
      <Skills />
      <Projects flag={flag} />
      <hr className="mt-10" />
      <AboutMe />
      <hr className="mt-10" />
      <ContactMe />
      <ContactForm />
      <ThankYou setFlag={setFlag} />
    </div>
  );
}
