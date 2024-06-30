// src/ContentContainer.js
import React from 'react';
import '../styles/contentContainer.css'; // Import the CSS file

const ContentContainer = ({ children }) => {
  return (
    <div className="content-container">
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
      {children}
    </div>
  );
};

export default ContentContainer;
