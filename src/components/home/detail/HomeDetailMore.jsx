import React from "react";

export const HomeDetailMore = ({ data }) => {
  return (
    <div className="detail-more-container">
      <div className="detail-more-item">
        <h4 className="detail-more-title">Weight</h4>
        <span className="detail-more-w">{data.weight}</span>
      </div>
      <div className="detail-more-item">
        <h4 className="detail-more-title">Height</h4>
        <span className="detail-more-h">{data.height}</span>
      </div>
      <div className="detail-more-item">
        <h4 className="detail-more-title">Exp</h4>
        <span className="detail-more-exp">{data.base_experience}</span>
      </div>
    </div>
  );
};
