import React, { useState, useEffect, useCallback } from "react";
import "./StarRatingWrapperContainer.css";
import { TitleWrapper } from "../TitleWrapper/TitleWrapper";
import { StarRating } from "../StarRating/StarRating";
import { FeedBack } from "../FeedBack/FeedBack";
import { rating } from "../../mockData/mockData";

export default function StarRatingWrapperContainer() {
  const [feedBackRating, setFeedBackRating] = useState(0);
  const [review, setReview] = useState(rating[0]);

  const reviewBasedonRating = useCallback((stars) => {
    setReview(rating[stars]);
  }, []);

  useEffect(() => {
    reviewBasedonRating(feedBackRating);
  }, [feedBackRating, reviewBasedonRating]);

  return (
    <div className="star_wrapper_container">
      <TitleWrapper />
      <StarRating totalStars={5} setFeedBackRating={setFeedBackRating} />
      <FeedBack review={review} />
    </div>
  );
}
