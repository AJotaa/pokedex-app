import React from "react";

export const HomeDetailStats = ({ data }) => {
  const stats = data?.map((e) => {
    let statName = e.stat.name;
    switch (statName) {
      case "hp":
        statName = "HP";
        break;
      case "attack":
        statName = "ATK";
        break;
      case "defense":
        statName = "DEF";
        break;
      case "special-attack":
        statName = "SpA";
        break;
      case "special-defense":
        statName = "SpD";
        break;
      case "speed":
        statName = "SPD";
        break;
      default:
    }
    return (
      <li className="detail-stats-item" key={e.stat.name}>
        <span className="detail-stats-name">{statName}</span>
        <span className="detail-stats-value">{e.base_stat}</span>
      </li>
    );
  });

  return (
    <div className="detail-stats-container">
      <h4 className="detail-stats-title">Stats</h4>
      <ul className="detail-stats-list">{stats}</ul>
    </div>
  );
};
