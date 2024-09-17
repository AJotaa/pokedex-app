import { useState, useEffect } from "react";

export const useDetailInfo = (str) => {
  const [strFromat, setDescription] = useState("");

  useEffect(() => {
    if (str) {
      const descriptionFormat = str?.replace(/[^a-zA-Z0-9 é,.]/g, " ");
      setDescription(descriptionFormat);
    }
  }, [str]);

  function findLanguage(data, lang) {
    const langObj = data?.find((e) => {
      return e.language.name === lang;
    });
    return langObj;
  }

  return { strFromat, findLanguage };
};
