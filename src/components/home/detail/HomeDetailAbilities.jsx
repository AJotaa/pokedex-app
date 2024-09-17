import React from "react";

export const HomeDetailAbilities = ({ data, color }) => {
  const abilities = data?.map((e) => {
    return (
      <li
        className="detail-abilities-item"
        key={e.ability.name}
        style={{ border: "solid 1px " + color }}
      >
        {e.ability.name}
      </li>
    );
  });

  return (
    <div className="detail-abilities-container">
      <h4 className="detail-abilities-titel">Abilities</h4>
      <ul className="detail-abilities-list">{abilities}</ul>
    </div>
  );
};
