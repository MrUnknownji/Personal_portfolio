import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultEase = "power2.out";
const defaultDuration = 1;

const createAnimation = (config) => ({
  duration: defaultDuration,
  ease: defaultEase,
  ...config,
});

const createScrollTrigger = (trigger, animation, options = {}) =>
  ScrollTrigger.create({
    trigger,
    start: "top 85%",
    animation,
    toggleActions: "play none none reverse",
    ...options,
  });

export const animations = {
  fadeIn: (target, options = {}) =>
    gsap.from(target, createAnimation({ opacity: 0, ...options })),

  slideIn: (target, direction = "left", options = {}) =>
    gsap.from(
      target,
      createAnimation({
        x: direction === "left" ? -100 : 100,
        opacity: 0,
        ...options,
      })
    ),

  textReveal: (target, options = {}) =>
    gsap.from(
      target,
      createAnimation({
        y: 20,
        opacity: 0,
        stagger: 0.05,
        ...options,
      })
    ),

  staggerChildren: (target, options = {}) =>
    gsap.fromTo(
      target,
      { y: 50, opacity: 0 },
      createAnimation({
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power1.out",
        ...options,
      })
    ),

  bounceIn: (target, options = {}) =>
    gsap.from(
      target,
      createAnimation({
        y: -50,
        opacity: 0,
        ease: "elastic.out(1, 0.5)",
        ...options,
      })
    ),

  createScrollTrigger,

  headerAnimations: (scope) => {
    const tl = gsap.timeline();
    tl.from(".LogoBtn", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
    tl.from(
      "ul li",
      {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );
    return tl;
  },

  projectsPin: (ref) => {
    ScrollTrigger.create({
      trigger: ref.current,
      pin: false,
      start: "top 20%",
      end: "bottom 20%",
      scrub: true,
      animation: gsap.to(ref.current, {}),
    });
  },

  projectContainer: {
    init: (projectSectionRef) => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".SvgBubble",
        { scale: 0, opacity: 0 },
        { duration: 1, scale: 0.75, opacity: 1 }
      )
        .from(".projectTitle", { scale: 0.5, opacity: 0, duration: 1 }, "-=0.5")
        .from(".desc", { y: -50, opacity: 0, duration: 1 })
        .from(".image-container", { width: 0, duration: 2 }, "-=1")
        .from(
          ".Btn1, .Btn2",
          { x: (i) => (i ? 50 : -50), opacity: 0, duration: 1, stagger: 0.1 },
          "-=1"
        );

      createScrollTrigger(".projectTitle", tl, {
        start: (self) => (self.vars.isDesktop ? "top 75%" : "top 90%"),
      });
    },

    toggleImages: (imagesContainerRef, fontArrowId, isShown, onComplete) => {
      const fontArrow = document.querySelector(`#${fontArrowId}`);
      const containerElement = imagesContainerRef.current;

      if (isShown) {
        gsap.to(fontArrow, { rotation: 0, duration: 0.5 });
        gsap.to(containerElement, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete,
        });
        gsap.to(".containerImage", {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 0.3,
        });
      } else {
        gsap.to(fontArrow, { rotation: 45, duration: 0.5 });
        gsap.set(containerElement, { height: "auto", opacity: 1 });
        gsap.set(".containerImage", { y: 80, opacity: 0 });
        gsap.from(containerElement, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete,
        });
        gsap.to(".containerImage", {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.2,
        });
      }
    },
  },

  contactMe: {
    init: (contactMeSection) => {
      const tl = gsap.timeline();

      tl.from("#contactMeParagraph", {
        y: -100,
        scale: 0.85,
        duration: 1,
        opacity: 0,
      })
        .from(
          "#ContactMeArrowText",
          { x: -100, duration: 1, opacity: 0 },
          "-=0.5"
        )
        .from(
          ".socialMediaCard",
          {
            opacity: 0,
            x: -400,
            duration: 1,
            stagger: 0.3,
            ease: "back",
          },
          "-=0.5"
        );

      createScrollTrigger("#contactMeParagraph", tl);
    },
  },

  aboutMe: {
    init: (aboutMeRef) => {
      const tl = gsap.timeline();
      tl.from(".aboutMeInfoContainer", {
        x: 200,
        opacity: 0,
        duration: 3,
        stagger: 0.4,
        ease: "elastic.out(3, 0.7)",
      });
      createScrollTrigger(".aboutMeInfoContainer", tl, { start: "top 80%" });
    },
  },

  contactForm: {
    init: (formSectionRef) => {
      const tl = gsap.timeline();
      const animations = [
        { target: ".contactForm", vars: { opacity: 0, y: 50, duration: 0.6 } },
        {
          target: "form",
          vars: { opacity: 0, y: 50, duration: 0.4 },
          position: "-=0.2",
        },
        {
          target: "form input",
          vars: { opacity: 0, x: -20, stagger: 0.2, duration: 0.4 },
          position: "-=0.2",
        },
        {
          target: "#Description",
          vars: { opacity: 0, x: -20, duration: 0.4 },
          position: "-=0.2",
        },
        {
          target: ".SvgBubble",
          vars: { opacity: 0, scale: 0, duration: 0.8 },
          position: "-=0.2",
        },
        {
          target: "#contactFormPara",
          vars: { opacity: 0, y: 20, duration: 0.5 },
          position: "-=0.3",
        },
        {
          target: "#contactFormSendBtn",
          vars: { opacity: 0, scale: 0.8, duration: 0.5 },
          position: "-=0.3",
        },
      ];

      animations.forEach(({ target, vars, position }) => {
        tl.from(target, vars, position);
      });

      createScrollTrigger(".contactForm", tl, { start: "top center" });
    },

    setupSendButtonHover: () => {
      const SendBtn = document.getElementById("contactFormSendBtn");
      const handleMouseEnter = () =>
        gsap.to("#Arrow", { marginLeft: 5, duration: 0.3 });
      const handleMouseLeave = () =>
        gsap.to("#Arrow", { marginLeft: 0, duration: 0.3 });

      SendBtn.addEventListener("mouseenter", handleMouseEnter);
      SendBtn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        SendBtn.removeEventListener("mouseenter", handleMouseEnter);
        SendBtn.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
  },

  thankYou: {
    init: (isDesktop) => {
      const createAnimation = (trigger, start, animations) => {
        const tl = gsap.timeline();
        animations.forEach(({ from, to, id, offset = "" }) => {
          tl.fromTo(id, from, { ...to, duration: 1 }, offset);
        });
        createScrollTrigger(trigger, tl, { start });
      };

      const animations = [
        {
          trigger: "#ThanksDiv",
          start: isDesktop ? "top center" : "top 80%",
          animations: [
            {
              id: "#ThanksImage",
              from: { scale: 2, opacity: 0, borderRadius: 0 },
              to: { opacity: 1, borderRadius: "50px", scale: 1 },
            },
            {
              id: "#ThanksPara",
              from: { x: -100, opacity: 0 },
              to: { x: 0, opacity: 1 },
              offset: "-=0.5",
            },
            {
              id: "#Regards",
              from: { x: 100, opacity: 0 },
              to: { x: 0, opacity: 1 },
              offset: "-=0.5",
            },
            {
              id: "#GoToTopButton",
              from: { y: 50, opacity: 0 },
              to: { y: 0, opacity: 1 },
              offset: "-=0.5",
            },
          ],
        },
        {
          trigger: "#copyrightDiv",
          start: "top 95%",
          animations: [
            {
              id: "#copyrightTxt",
              from: { x: -100, opacity: 0 },
              to: { x: 0, opacity: 1 },
            },
            {
              id: "#developerTxt",
              from: { x: 100, opacity: 0 },
              to: { x: 0, opacity: 1 },
              offset: "-=0.5",
            },
          ],
        },
      ];

      animations.forEach(({ trigger, start, animations }) =>
        createAnimation(trigger, start, animations)
      );
    },
  },

  socialMediaCard: {
    init: (ref) => {
      const currentElem = ref.current;
      currentElem.addEventListener("mouseenter", () => {
        gsap.to(currentElem, { scale: 1.1, duration: 1, ease: "back.out(4)" });
      });
      currentElem.addEventListener("mouseleave", () => {
        gsap.to(currentElem, { scale: 1, duration: 1, ease: "back.out(4)" });
      });
    },
  },

  ring: {
    init: (isDesktop) => {
      if (isDesktop) {
        const tl = gsap.timeline();
        tl.to("#simpleFanSvg", {
          rotateZ: 1080,
          ease: "none",
        });
        ScrollTrigger.create({
          trigger: `body`,
          start: "top 0%",
          end: "bottom 100%",
          scrub: 1,
          animation: tl,
        });
      }
    },
  },

  skillHider: {
    init: () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: "#hero-div",
          start: "top 0%",
          end: "bottom 75%",
        },
      });

      tl.to("#hider-card", {
        y: 100,
        opacity: 0,
      });
    },
  },

  heading: {
    init: (element, options = {}) => {
      const defaults = {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        start: "top 80%",
      };

      const config = { ...defaults, ...options };

      gsap.from(element, {
        y: config.y,
        opacity: config.opacity,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: {
          trigger: element,
          start: config.start,
          toggleActions: "play none none reverse",
        },
      });
    },
  },
};

export const setupHeaderAnimation = (headerRef) => {
  let prevScrollPos = 0;
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerStyle = headerRef.current.style;
    headerStyle.transition = "transform 0.7s";
    if (currentScrollPos > prevScrollPos) {
      headerStyle.transform = "translateY(-80px)";
    } else {
      headerStyle.transform = "translateY(0)";
    }
    prevScrollPos = currentScrollPos;
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const heroAnimations = {
  animateElement: (selector, props, position = "-=0.6") => {
    return gsap.from(
      selector,
      {
        opacity: 0,
        duration: 1,
        ease: "expo",
        ...props,
      },
      position
    );
  },

  animateMainHeading: (selector) => {
    return gsap.from(selector, {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "bounce",
    });
  },

  animateSubHeading: (selector) => {
    return gsap.from(selector, {
      y: "random(-300,300)",
      x: "random(-100,400)",
      opacity: 0,
      duration: 1,
      ease: "bounce",
      stagger: 0.05,
    });
  },

  animateImage: (selector) => {
    return gsap.from(selector, {
      y: 100,
      opacity: 0,
      duration: 0.7,
      ease: "none",
    });
  },

  animateButton: (selector) => {
    return gsap.from(selector, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });
  },

  animateSvg: (selector) => {
    return gsap.from(selector, {
      scale: 0,
      opacity: 0,
      duration: 1,
    });
  },

  createHeroTimeline: () => {
    const tl = gsap.timeline();

    tl.add(heroAnimations.animateMainHeading(".mainChar"))
      .add(heroAnimations.animateSubHeading(".subChar"), "-=1.5")
      .add(heroAnimations.animateButton("#contactBtn"), "-=1.2")
      .add(heroAnimations.animateButton("#projectBtn"), "-=1")
      .add(heroAnimations.animateSvg("#HeroSvg"), "-=1.5")
      .add(heroAnimations.animateImage("#mainImage"), "-=0.");
    return tl;
  },
};

animations.skillBoxes = {
  init: () => {
    const tl = gsap.timeline();
    tl.from(".skill-box", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    createScrollTrigger(".skill-box", tl, {
      start: "top 80%",
    });
  },
};

animations.projectContainer.init = (projectSectionRef) => {
  const tl = gsap.timeline();
  tl.from(".SvgBubble", { scale: 0, opacity: 0, duration: 1 })
    .from(".projectTitle", { scale: 0.5, opacity: 0, duration: 1 }, "-=0.5")
    .from(".desc", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
    .from(".image-container", { width: 0, opacity: 0, duration: 2 }, "-=0.5")
    .from(
      ".Btn1, .Btn2",
      { x: (i) => (i ? 50 : -50), opacity: 0, duration: 1, stagger: 0.1 },
      "-=1.5"
    );

  createScrollTrigger(".projectTitle", tl, {
    start: (self) => (self.vars.isDesktop ? "top 75%" : "top 90%"),
  });
};

animations.heading.init = (element, options = {}) => {
  const config = {
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    start: "top 80%",
    ...options,
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: config.start,
      toggleActions: "play none none reverse",
    },
  });

  tl.from(element, {
    y: config.y,
    opacity: config.opacity,
    duration: config.duration,
    ease: config.ease,
  });
};
