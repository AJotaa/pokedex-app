import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { BaseSpinner } from "../../interface/BaseSpinner";
import { HomeDetailEvoItem } from "./HomeDetailEvoItem";

export const HomeDetailEvo = ({ url, itemSelect }) => {
  const [dataEvo, isLoading] = useFetch(url);
  const evo = {
    first: dataEvo.chain?.species,
    second: dataEvo.chain?.evolves_to?.map((e) => {
      return e;
    }),
    third: dataEvo.chain?.evolves_to[0]?.evolves_to?.map((e) => {
      return e;
    }),
  };

  const second = evo.second?.map((e) => {
    return (
      <HomeDetailEvoItem
        dataItem={e.species}
        itemSelect={itemSelect}
        key={e.species.name}
      />
    );
  });
  const third = evo.third?.map((e) => {
    return (
      <HomeDetailEvoItem
        dataItem={e.species}
        itemSelect={itemSelect}
        key={e.species.name}
      />
    );
  });

  return (
    <div className="detail-evo-container">
      {!isLoading ? (
        <>
          {evo.first && evo.second[0] && (
            <div className="detail-evo-div">
              <HomeDetailEvoItem
                dataItem={evo?.first}
                itemSelect={itemSelect}
              />
            </div>
          )}
          {evo.second[0] && <div className="detail-evo-div">{second}</div>}
          {evo.third?.[0] && <div className="detail-evo-div">{third}</div>}
        </>
      ) : (
        <BaseSpinner />
      )}
    </div>
  );
};
