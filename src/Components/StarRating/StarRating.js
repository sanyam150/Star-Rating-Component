import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./starRating.css";

export const StarRating = ({ totalStars, setFeedBackRating }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);

  return (
    <div className="star_container">
      <div id="star_wrapper">
        {Array(totalStars)
          .fill()
          .map((_, index) => {
            return (
              <label key={index}>
                <AiTwotoneStar
                  size={50}
                  style={{
                    color: `${
                      index + 1 <= (hover || rating) ? "#ffc107" : "#ffffff"
                    }`,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(0)}
                />
                <input
                  type="radio"
                  value={index + 1}
                  onClick={() => {
                    setRating(index + 1);
                    setFeedBackRating(index + 1);
                    return;
                  }}
                  className="radio_button_input"
                />
              </label>
            );
          })}
      </div>
    </div>
  );
};
