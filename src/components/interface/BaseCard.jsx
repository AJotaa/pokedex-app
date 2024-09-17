import React from "react";

export const BaseCard = ({ children, extraClass }) => {
  return <div className={`base-card ${extraClass}`}>{children}</div>;
};
