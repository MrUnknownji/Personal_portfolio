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
import ImageProvider from "./Contexts/ImageContext/ImageProvider";
import CustomThemeProvider from "./Contexts/ImageContext/CustomThemeProvider";
import DeviceTypeProvider from "./Contexts/DeviceTypeProvider";
import Ring from "./Components/elements/Ring";
import FlexibleDragAndDrop from "./Components/elements/FlexibleDragAndDrop";
import PinnedFan from "./Components/elements/PinnedFan";
import { Meteors } from "./Components/ui/meteors";
import Header from "./Components/Header";
// import Image from "next/image";
// import Bg from "./Assets/BackgroundPortfolioBgSmall.jpg";

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
    <CustomThemeProvider>
      <ImageProvider>
        <DeviceTypeProvider>
          {/* <Image
            src={Bg}
            width={1000}
            height={1000}
            alt="background"
            style={{
              position: "fixed",
              zIndex: -1,
              width: "100%",
              top: 0,
              left: 0,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          /> */}
          <Header />
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
          <Ring />
        </DeviceTypeProvider>
      </ImageProvider>
    </CustomThemeProvider>
  );
}
