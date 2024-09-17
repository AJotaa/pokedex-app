import { useState } from "react";

export const useItemSelect = () => {
  const itemsNum = 905;
  const [item, setItem] = useState("1");

  function itemSelect(value) {
    setItem(value);
  }

  function increaseItem() {
    if (item < itemsNum) {
      setItem((prev) => {
        return +prev + 1;
      });
    }
  }

  function decrementItem() {
    if (item > 1) {
      setItem((prev) => {
        return +prev - 1;
      });
    }
  }

  return { item, itemSelect, increaseItem, decrementItem };
};
