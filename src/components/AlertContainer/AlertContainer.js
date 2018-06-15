import React from 'react';
import './AlertContainer.css';

export const AlertContainer = ({ children }) => (
  <div
    className={
      `alert-container
      ${children ? "alert-container-visible" : ""}`
    }
    >
    <div className="alert-content">
      {children}
    </div>
  </div>
);
