import React from 'react';

const BodyHeader = ({ name }) => (
  <div className="bx--row bh-page__banner">
    <div className="bx--col-sm-3 bx--col-md-7 bx--col-lg-15">
      <h1 className="glitch" data-text="Argus">
        Argus
      </h1>
      <h2 className="bh-page__heading">{name}</h2>
    </div>
    <div className="bx--col-sm-1 bx--col-md-1 bx--col-lg-1 bh-right-logo-div">
      <img
        className="bh-right-logo"
        src={`${process.env.PUBLIC_URL}/pc-feather.png`}
        alt=""
      />
    </div>
    <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 bh-down-line" />
  </div>
);

export default BodyHeader;
