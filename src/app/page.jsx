"use client";
import { useLayoutEffect, useState } from "react";
import Loading from "./loading";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import ContactForm from "./Components/ContactForm";
import ThankYou from "./Components/ThankYou";
import Ring from "./Components/elements/Ring";
import FlexibleDragAndDrop from "./Components/elements/FlexibleDragAndDrop";
import SkillHider from "./Components/elements/PinnedFan";
import Header from "./Components/Header/Header";
import { Meteors } from "./Components/ui/meteors";
import firebaseConfig from "./firebaseConfiguration";
import firebase from "firebase/compat/app";
import AppProvider from "./Contexts/AppProvider";

const app = firebase.initializeApp(firebaseConfig);

export default function Home() {
  const [IsLoading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2650);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return IsLoading ? (
    <Loading />
  ) : (
    <AppProvider>
      <Header />
      <Meteors number={30} />
      <FlexibleDragAndDrop />
      <SkillHider />
      <HeroSection app={app} />
      <Skills />
      <Projects />
      <hr className="mt-10" />
      <AboutMe />
      <hr className="mt-10" />
      <ContactMe />
      <ContactForm app={app} />
      <ThankYou />
      <Ring />
    </AppProvider>
  );
}
