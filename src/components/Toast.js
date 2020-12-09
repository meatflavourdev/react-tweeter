import React from "react";
import './Toast.css';

export const Toast = () => {
  return (
    <div id="toast-container">
      <div className="toast-error notification is-danger">
        <button className="toast-close delete"></button>
        <span id="toast-body">I can't publish that-- it's blank! 🧻</span>
      </div>
    </div>
  )
};
