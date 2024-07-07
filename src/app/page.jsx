"use client";
import { useState, useEffect } from "react";
import Loading from "./loading";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import ContactForm from "./Components/ContactForm";
import ThankYou from "./Components/ThankYou";
import Ring from "./Components/elements/Ring";
import SkillHider from "./Components/elements/SkillHider";
import Header from "./Components/Header/Header";
import { Meteors } from "./Components/ui/meteors";
import firebaseConfig from "./firebaseConfiguration";
import firebase from "firebase/compat/app";
import AppProvider from "./Contexts/AppProvider";

const app = firebase.initializeApp(firebaseConfig);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const tmt = setTimeout(() => {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }, 2000);

    const handleLoad = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    };

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(tmt);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        document.querySelector(".content-wrapper").classList.add("loaded");
      }, 50);
    }
  }, [isLoading]);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <AppProvider>
          <div className="content-wrapper">
            <Header />
            <Meteors />
            <HeroSection />
            <Skills />
            <SkillHider />
            <Projects />
            <hr className="mt-10" />
            <AboutMe />
            <hr className="mt-10" />
            <ContactMe />
            <ContactForm app={app} />
            <ThankYou />
            <Ring />
          </div>
        </AppProvider>
      )}
    </div>
  );
}
