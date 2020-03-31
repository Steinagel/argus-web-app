import React from 'react';

export const AboutImage = ({ alt, image }) => (
  <div className="bx--col-md-8 bx--col-lg-8 test">
    <img
      className="about-tools"
      src={`${process.env.PUBLIC_URL}/${image}`}
      alt={alt}
    />
  </div>
);

export const AboutText = ({ tech, text }) => (
  <div className="bx--col-md-8 bx--col-lg-8 test2">
    <p className="about-title">{tech}</p>
    <p>{text}</p>
  </div>
);

export default { AboutText, AboutImage };
