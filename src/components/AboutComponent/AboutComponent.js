import React from 'react';

export const AboutImage = ({ alt, image, className }) => (
  <div
    className={`bx--col-sm-4 bx--col-md-8 bx--col-lg-8 about-image ${className}`}>
    <img
      className="about-tools"
      src={`${process.env.PUBLIC_URL}/${image}`}
      alt={alt}
    />
  </div>
);

export const AboutText = ({ tech, text, className }) => (
  <div
    className={`bx--col-sm-4 bx--col-md-8 bx--col-lg-8 about-text ${className}`}>
    <p className="about-title">{tech}</p>
    <p className="about-body">{text}</p>
    <img
      className="about-text-shaddow"
      src={`${process.env.PUBLIC_URL}/shaddow.png`}
      alt="Tech text's shaddow"
    />
  </div>
);

export default { AboutText, AboutImage };
