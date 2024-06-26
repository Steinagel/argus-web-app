import React from 'react';

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__spacing" />
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
            <div className="bx--row landing-page__tab-content">
              <div className="bx--col-md-4 bx--col-lg-7 landing-page__text">
                <h1 className="landing-page__heading">Argus</h1>
                <h2 className="landing-page__subheading">
                  Data Leakage Discoverer
                </h2>
                <p className="landing-page__p">
                  - Sensitive data leakage management system
                </p>
                <p className="landing-page__p">- Any language</p>
                <p className="landing-page__p">
                  - Surface and <strong>Deepweb</strong>
                </p>
                <p className="landing-page__p">- We seek your data for you</p>
                <p className="landing-page__p">- Immediately alert</p>
                <p className="landing-page__p">- How to act? of course</p>
                <p className="landing-page__p">- Search your data</p>
                <p className="landing-page__team">by 42nine Team</p>
              </div>
              <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8 landing-page__feather">
                <img
                  className="landing-page__illo"
                  src={`${process.env.PUBLIC_URL}/pc-feather.png`}
                  alt="Carbon illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bx--row landing-page__spacing" />
    </div>
  );
};

export default LandingPage;
