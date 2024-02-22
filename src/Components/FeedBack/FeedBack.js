import React from "react";
import "./FeedBack.css";
export const FeedBack = (props) => {
  const { review } = props;
  return (
    <div className="feedBack_container">
      <div className="feedBack">{review}</div>
    </div>
  );
};
