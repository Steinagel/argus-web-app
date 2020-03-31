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
          text="Our analysis is made and improved with Watson Studio. Argus understands
          a bunch of languages using IBM Translator and for understanding audios uses IBM Speech to Text."
        />
        <AboutImage image="tooling/ibm_tooling.png" alt="Ibm Tools" />
      </div>
      <div className="bx--row bx--grid--full-width ondw-page__tab-content">
        <AboutText
          tech="Python"
          text="Inside Watson Studio we used Python and Pythorch, which built Argus IA using blablabla"
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
        <AboutImage image="tooling/whonix_tooling.png" alt="Ibm Tools" />
      </div>
      <p className="ondw-page__team">by 42nine Team</p>
    </div>
  );
};

export default AboutArgus;
