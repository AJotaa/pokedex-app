import { useState } from "react";

export const useToTop = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  window.addEventListener("scroll", handleShow);

  function handleShow() {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  }

  function handleToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { isOnTop, handleToTop };
};
