import React from "react";

export const BaseButton = ({ children, extraClass }) => {
  return <div className={`base-button ${extraClass}`}>{children}</div>;
};
