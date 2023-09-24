import React from "react";
import "../styles/Menu.css";
export const MenuItem = ({ image, name, content }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <div className="cont">
        <h1 style={{}}>{name}</h1>
        <h6 style={{}}>{content}</h6>
      </div>
    </div>
  );
};
