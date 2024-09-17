import React from "react";

export const BaseSpinner = () => {
  return (
    <div className="base-spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
