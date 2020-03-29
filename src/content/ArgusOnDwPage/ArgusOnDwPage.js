import React from 'react';

const ArgusOnDwPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width ondw-page">
      <div className="bx--row ondw-page__spacing" />

      <div className="bx--row ondw-page__tab-content">
        <div className="bx--col-md-4 bx--col-lg-7 ondw-page__text">
          <h1 className="ondw-page__heading">Argus</h1>
          <h2 className="ondw-page__subheading">on Deepweb</h2>
          <p className="ondw-page__p">
            How do we seek for you inside the dark and deepweb? <br />
            <strong>Whonix</strong> will anonimate us! <br />
            This operational system combined with powerful firewalls ensure we
            are not receiving dangerous data and hide us. <br />
            So those who are trying to seek us, are just beeing finded.
          </p>
          <p className="ondw-page__team">by 42nine Team</p>
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8 ondw-page__feather">
          <img
            className="ondw-page__illo"
            src={`${process.env.PUBLIC_URL}/argus-on-deepweb.png`}
            alt="Carbon illustration"
          />
        </div>
      </div>

      <div className="bx--row ondw-page__spacing" />

      {/* <div className="bx--row ondw-page__tab-content">
        <div className="bx--col-md-4 bx--col-lg-7 ondw-page__text">
          <h1 className="ondw-page__heading">Argus</h1>
          <h2 className="ondw-page__subheading">on Deepweb</h2>
          <p className="ondw-page__p">
            How do we seek for you inside the dark and deepweb? <br />
            <strong>Whonix</strong> will anonimate us! <br />
            This operational system combined with powerful firewalls ensure we
            are not receiving dangerous data and hide us. <br />
            So those who are trying to seek us, are just beeing finded.
          </p>
          <p className="ondw-page__team">by 42nine Team</p>
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8 ondw-page__feather">
          <img
            className="ondw-page__illo"
            src={`${process.env.PUBLIC_URL}/argus-on-deepweb.png`}
            alt="Carbon illustration"
          />
        </div>
      </div>

      <div className="bx--row ondw-page__spacing" /> */}
    </div>
  );
};

export default ArgusOnDwPage;
