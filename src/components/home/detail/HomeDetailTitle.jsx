import React from "react";
import { useDetailInfo } from "../../../hooks/useDetailInfo";
import { useStringFormat } from "../../../hooks/useStringFormat";

export const HomeDetailTitle = ({ id, name, sub }) => {
  const itemName = useStringFormat(name);
  const { findLanguage } = useDetailInfo();
  const subTitle = findLanguage(sub, "en")?.genus;

  return (
    <>
      <div className="detail-id-container">
        <span className="detail-id">N°{id}</span>
      </div>
      <div className="detail-name-container">
        <h3 className="detail-name">{itemName}</h3>
        <span className="detail-subtitle">{subTitle}</span>
      </div>
    </>
  );
};
