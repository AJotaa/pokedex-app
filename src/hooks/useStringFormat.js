import { useState, useEffect } from "react";

export function stringFormat(string) {
  let newString = "";
  if (typeof string === "string") {
    newString = string
      .split(" ")
      .map((e) => {
        return e.charAt(0).toUpperCase() + e.slice(1);
      })
      .join(" ");
  }
  return newString;
}

export const useStringFormat = (value) => {
  const [string, setString] = useState("");

  useEffect(() => {
    setString(stringFormat(value));
  }, [value]);

  function stringFormat(string) {
    let newString = "";
    if (typeof string === "string") {
      newString = string
        .split(" ")
        .map((e) => {
          return e.charAt(0).toUpperCase() + e.slice(1);
        })
        .join(" ");
    }
    return newString;
  }

  return string;
};
