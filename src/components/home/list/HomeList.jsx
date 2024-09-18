import React from "react";
import { useIds } from "../../../hooks/useIds";
import { BaseSpinner } from "../../interface/BaseSpinner";
import { HomeListItem } from "./HomeListItem";

export const HomeList = ({ itemSelect, pageData, isLoading, item, theRef, handleOpen }) => {
  
  const { getId } = useIds();
  const pageDataIds = getId(pageData);

  const listData = pageDataIds?.map((e, i) => {
    if (pageDataIds.length === i + 1) {
      return (
        <HomeListItem
          info={e}
          itemSelect={itemSelect}
          key={e + i}
          item={item}
          theRef={theRef}
          handleOpen={handleOpen}
        />
      );
    } else {
      return (
        <HomeListItem
          info={e}
          itemSelect={itemSelect}
          key={e + i}
          item={item}
          handleOpen={handleOpen}
        />
      );
    }
  });

  return (
    <div className="list-container">
      <>
        <ul className="home-list">{listData}</ul>
        <div style={{ minHeight: "90px" }}>{isLoading && <BaseSpinner />}</div>
      </>
    </div>
  );
};
