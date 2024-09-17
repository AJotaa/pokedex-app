import React from "react";
import { BaseBadge } from "../../interface/BaseBadge";
// import { HomeDetailTypesItem } from "./HomeDetailTypesItem";

export const HomeDetailTypes = ({ data }) => {
  const types = data?.map((e) => {
    return <BaseBadge data={e} key={e.type.name} />;
  });

  return (
    <div className="detail-types-container">
      <ul className="detal-types-list">{types}</ul>
    </div>
  );
};
