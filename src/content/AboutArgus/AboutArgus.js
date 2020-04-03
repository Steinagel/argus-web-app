import React from 'react';
import { AboutImage, AboutText } from '../../components/AboutComponent';
import BodyHeader from '../../components/BodyHeader';

const AboutArgus = () => {
  return (
    <div className="bx--grid bx--grid--full-width ondw-page">
      <BodyHeader name="Armory" />
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText
          tech="IBM"
          text="Use Watson is the key for Argus to work with any kind of data and understand any language."
        />
        <AboutImage image="tooling/ibm_tooling.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText
          tech="Python and the Argus Mind"
          text="Argus count with the most famous Python AI and ML techs combined with the power of Watson tools."
        />
        <AboutImage image="tooling/python_tooling.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText tech="IBM" text="this is IBM tools" />
        <AboutImage image="tooling/elastic_tooling.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText tech="IBM" text="this is IBM tools" />
        <AboutImage image="tooling/apache_tooling.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText tech="IBM" text="this is IBM tools" />
        <AboutImage image="tooling/devops_tooling.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText tech="IBM" text="this is IBM tools" />
        <AboutImage image="tooling/whonix_tooling.png" alt="Ibm Tools" />
      </div>
      <p className="ondw-page__team">by 42nine Team</p>
    </div>
  );
};

export default AboutArgus;
