import React from "react";
import { HomeDetailAbilities } from "./HomeDetailAbilities";
import { HomeDetailControls } from "./HomeDetailControls";
import { HomeDetailDescription } from "./HomeDetailDescription";
import { HomeDetailEvo } from "./HomeDetailEvo";
import { HomeDetailMore } from "./HomeDetailMore";
import { HomeDetailStats } from "./HomeDetailStats";
import { HomeDetailTitle } from "./HomeDetailTitle";
import { HomeDetailTypes } from "./HomeDetailTypes";

export const HomeDetailInfo = ({
  data,
  dataExtra,
  increaseItem,
  decrementItem,
  itemSelect
}) => {
  if (data && dataExtra) {
    const descriptionStr = dataExtra?.flavor_text_entries?.[0]["flavor_text"];
    const { id, types, abilities, stats, name } = data;
    const { genera, color, evolution_chain } = dataExtra;

    return (
      <div className="detail-info-container">
        <HomeDetailTitle id={id} name={name} sub={genera} />
        <HomeDetailTypes data={types} />
        <HomeDetailDescription str={descriptionStr} />
        <HomeDetailAbilities data={abilities} color={color?.name} />
        <HomeDetailMore data={data} />
        <HomeDetailStats data={stats} />
        <HomeDetailEvo url={evolution_chain?.url} itemSelect={itemSelect}/>
        <HomeDetailControls
          increaseItem={increaseItem}
          decrementItem={decrementItem}
        />
      </div>
    );
  }
};
