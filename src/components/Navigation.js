import React from "react";
import './Navigation.css';

export const Navigation = () => {

  return (
    <nav id="nav-main" className="mainnav">
      <span className="logo">Tweeter</span>
      <div id="nav-button-new">
        <div className="icon">
          <i className="fas fa-angle-double-down"></i>
        </div>
        <span><span className="has-text-weight-semibold">Write</span> a New Tweet</span>
      </div>
    </nav>
  );
};
