"use client";
import { useEffect, useState } from "react";

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return isScrolled;
}
