import React from 'react';

const BodyHeader = ({ name }) => (
  <div className="bx--row tryargus-page__banner">
    <div className="bx--col-lg-16">
      <h1 className="glitch" data-text="Argus">
        Argus
      </h1>
      <h2 className="tryargus-page__heading">{name}</h2>
    </div>
  </div>
);

export default BodyHeader;
