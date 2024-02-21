import React from "react";
import "./TitleWrapper.css";
import { title } from "../../mockData/mockData";

export const TitleWrapper = () => {
  return <div className="title_wrapper_container">
    <div className="title_content">{title}</div>
  </div>;
};
