import React from "react";
import { HomeDetailSection } from "../components/home/detail/HomeDetailSection";
import { HomeListSection } from "../components/home/list/HomeListSection";
import { BaseButton } from "../components/interface/BaseButton";
import { useItemSelect } from "../hooks/useItemSelect";
import { useToTop } from "../hooks/useToTop";
import { HomeModal } from "../components/home/detail/HomeModal";
import { useModal } from "../hooks/useModal";
import { useSize } from "../hooks/useSize";

export const HomePage = () => {
  const { item, itemSelect, increaseItem, decrementItem } = useItemSelect();
  const { isOnTop, handleToTop } = useToTop();
  const { open, handleOpen } = useModal();
  const { width } = useSize();

  return (
    <div className="home-page">
      <div className="home-page-container container">
        <HomeListSection
          itemSelect={itemSelect}
          item={item}
          handleOpen={handleOpen}
        />
        {width > 500 && (
          <HomeDetailSection
            item={item}
            increaseItem={increaseItem}
            decrementItem={decrementItem}
            itemSelect={itemSelect}
          />
        )}
      </div>
      {!isOnTop && (
        <BaseButton extraClass="btn-to-top">
          <button onClick={handleToTop}>top</button>
        </BaseButton>
      )}
      {width <= 500 && open && (
        <HomeModal
          item={item}
          increaseItem={increaseItem}
          decrementItem={decrementItem}
          itemSelect={itemSelect}
          handleOpen={handleOpen}
        />
      )}
    </div>
  );
};
