import React from "react";
import { BaseCard } from "../../interface/BaseCard";
import { BaseBadge } from "../../interface/BaseBadge";
import { BaseSpinner } from "../../interface/BaseSpinner";
import { useFetch } from "../../../hooks/useFetch";
import { useStringFormat } from "../../../hooks/useStringFormat";
import { useFocus } from "../../../hooks/useFocus";

export const HomeListItem = ({ info, itemSelect, theRef, item }) => {
  const url = "https://pokeapi.co/api/v2/pokemon/" + info;
  const [data, isLoading] = useFetch(url);
  const { id, sprites, types } = data;
  const name = useStringFormat(data?.name);
  const focusClass = useFocus(id, +item);

  const itemTypes = types?.map((e) => {
    return <BaseBadge data={e} key={e.type.name} />;
  });

  return (
    <li
      className="home-list-item"
      onClick={() => itemSelect(info)}
      ref={!isLoading ? theRef : null}
    >
      <BaseCard extraClass={focusClass}>
        {!isLoading ? (
          <div className="item-container">
            <div className="item-img-container">
              <img src={sprites.front_default} alt="" className="item-img" />
            </div>
            <div className="item-info-container">
              <div className="item-number-container">
                <span className="item-number">N°{id}</span>
              </div>
              <div className="item-name-container">
                <h4 className="item-name">{name}</h4>
              </div>
              <ul className="item-types-list">{itemTypes}</ul>
            </div>
          </div>
        ) : (
          <BaseSpinner />
        )}
      </BaseCard>
    </li>
  );
};
