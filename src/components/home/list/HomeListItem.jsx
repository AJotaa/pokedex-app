import React from "react";
import { BaseCard } from "../../interface/BaseCard";
import { BaseBadge } from "../../interface/BaseBadge";
import { BaseSpinner } from "../../interface/BaseSpinner";
import { useFetch } from "../../../hooks/useFetch";
import { useStringFormat } from "../../../hooks/useStringFormat";
import { useFocus } from "../../../hooks/useFocus";
import { useSize } from "../../../hooks/useSize";

export const HomeListItem = ({
  info,
  itemSelect,
  theRef,
  item,
  handleOpen,
}) => {
  const url = "https://pokeapi.co/api/v2/pokemon/" + info;
  const [data, isLoading] = useFetch(url);
  const { id, sprites, types } = data;
  const name = useStringFormat(data?.name);
  const focusClass = useFocus(id, +item);
  const { width } = useSize();

  const itemTypes = types?.map((e) => {
    return <BaseBadge data={e} key={e.type.name} />;
  });

  function handleItem(info) {
    itemSelect(info);

    if (width <= 500) {
      handleOpen(true);
    }
  }

  return (
    <li
      className="home-list-item"
      onClick={() => handleItem(info)}
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
