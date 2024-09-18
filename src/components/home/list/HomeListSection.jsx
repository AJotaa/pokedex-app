import React from "react";
import { usePage } from "../../../hooks/usePage";
import { BaseSearchBar } from "../../interface/BaseSearchBar";
import { HomeList } from "./HomeList";

export const HomeListSection = ({ itemSelect, item, handleOpen }) => {
  const { pageData, isLoading, query, loadBySearch, handleSearch, ref } =
    usePage();

  return (
    <section className="home-list-section">
      <BaseSearchBar
        handleSearch={handleSearch}
        loadBySearch={loadBySearch}
        query={query}
      />
      <HomeList
        itemSelect={itemSelect}
        pageData={pageData}
        isLoading={isLoading}
        item={item}
        theRef={ref}
        handleOpen={handleOpen}
      />
    </section>
  );
};
