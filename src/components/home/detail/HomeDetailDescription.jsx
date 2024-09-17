import React from "react";
import { useDetailInfo } from "../../../hooks/useDetailInfo";

export const HomeDetailDescription = ({ str }) => {
  const { strFromat } = useDetailInfo(str);

  return (
    <div className="detail-description-container">
      <h4 className="detail-description-title">Pokedex Entry</h4>
      <p className="detail-description-para">{strFromat}</p>
    </div>
  );
};
