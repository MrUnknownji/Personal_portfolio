import { useState, useEffect } from "react";

export function useWindowSize() {
  const [innerWidth, setInnerWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return innerWidth;
}
