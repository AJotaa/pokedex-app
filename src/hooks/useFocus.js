import { useState, useEffect } from "react";

export const useFocus = (id, item) => {
  const [focusClass, setFocusClass] = useState("");

  useEffect(() => {
    if (item === id) {
      setFocusClass("is-focus");
    } else {
      setFocusClass("");
    }
  }, [item, id]);

  return focusClass;
};
