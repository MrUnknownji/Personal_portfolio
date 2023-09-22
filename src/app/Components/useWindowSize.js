import { useState, useLayoutEffect } from "react";

export function useWindowSize() {
  const [innerWidth, setInnerWidth] = useState(undefined);

  useLayoutEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return innerWidth;
}
