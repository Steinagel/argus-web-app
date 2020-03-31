import React from 'react';
import { AboutImage, AboutText } from '../../components/AboutComponent';

const AboutArgus = () => {
  return (
    <div className="bx--grid bx--grid--full-width ondw-page">
      <div className="bx--row ondw-page__spacing" />
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText tech="IBM" text="this is IBM tools" />
        <AboutImage image="ibm_tools_.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutImage image="ibm_tools_.png" alt="Ibm Tools" />
        <AboutText tech="IBM" text="this is IBM tools" />
      </div>
      <div className="bx--row ondw-page__spacing" />

      {/* <div className="bx--row ondw-page__tab-content">

      </div>

      <div className="bx--row ondw-page__spacing" />

      <div className="bx--row ondw-page__tab-content">
        <img
          className="ondw-ibm_tools"
          src={`${process.env.PUBLIC_URL}/ibm_tools_.png`}
          alt="Carbon illustration"
        />
      </div>

      <div className="bx--row ondw-page__spacing" />

      <div className="bx--row ondw-page__tab-content">
        <img
          className="ondw-elastic_tools"
          src={`${process.env.PUBLIC_URL}/elastic_tools_.png`}
          alt="Carbon illustration"
        />
      </div>

      <div className="bx--row ondw-page__spacing" />

      <div className="bx--row ondw-page__tab-content">
        <img
          className="ondw-apache_tools"
          src={`${process.env.PUBLIC_URL}/apache_tools_.png`}
          alt="Carbon illustration"
        />
      </div>

      <div className="bx--row ondw-page__spacing" />

      <div className="bx--row ondw-page__tab-content extra-padding">
        <div className="bx--col-md-1 bx--col-lg-2"></div>
        <div className="bx--col-md-3 bx--col-lg-6 ondw-page__feather" redao>
          <img
            className="ondw-deepweb"
            src={`${process.env.PUBLIC_URL}/argus-on-deepweb.png`}
            alt="Carbon illustration"
          />
        </div>
        <div className="bx--col-md-3 bx--col-lg-6 ondw-whonix">
          <img
            className="ondw-whonix"
            src={`${process.env.PUBLIC_URL}/whonix.png`}
            alt="Carbon illustration"
          />
            <br />
            <p className="ondw-page__p">
              <strong>VPNs</strong> &#8226; <strong>Firewalls</strong> &#8226;
              <strong> Mesh Network</strong> &#8226; <strong>Encrypt</strong>
            </p>
            
        </div>
        <div className="bx--col-lg-2"></div>
      </div>

      <div className="bx--row ondw-page__spacing" /> */}
      <p className="ondw-page__team">by 42nine Team</p>
    </div>
  );
};

export default AboutArgus;
