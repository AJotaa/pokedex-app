import React from "react";

export const HomeDetailControls = ({ increaseItem, decrementItem }) => {
  return (
    <div className="detail-controls-container">
      <button className="detail-btn-left" onClick={decrementItem}>
        {"<"}
      </button>
      <button className="detail-btn-right" onClick={increaseItem}>
        {">"}
      </button>
    </div>
  );
};
