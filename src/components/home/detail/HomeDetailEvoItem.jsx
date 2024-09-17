import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useIds } from "../../../hooks/useIds";

export const HomeDetailEvoItem = ({ dataItem, itemSelect }) => {
  const { getId } = useIds();
  const elemId = getId(dataItem.url);
  const [data, isLoading] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${elemId}`
  );

  // console.log(data.sprites.other);
  return (
    <>
      {!isLoading && (
        <div className="detail-evo-item">
          {/* <img src={data.sprites.front_default} alt="" className="detail-evo-img" /> */}
          <span className="detail-evo-name" onClick={() => itemSelect(elemId)}>
            {dataItem.name}
          </span>
        </div>
      )}
    </>
  );
};
