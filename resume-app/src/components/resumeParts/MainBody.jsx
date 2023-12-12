import React from 'react';
import DegreeStudies from './DegreeStudies';
import Experiences from './Experiences';
import Courses from './Courses';
import SkillsSummary from './SkillsSummary';
import { body } from '../../data';

export default class extends React.Component {
  render() {
    const { locale } = this.props;
    

    const [main, ...others] = body.descriptions;
    const renderedDescriptions = others.map(
      (description, i) => (
        <p key={i}>{description[locale]}</p>
      )
    );
    return (
      <div className="col-xs-12 col-sm-8 main-body" >
        <p><b>{main[locale]}</b></p>
        {renderedDescriptions}

        <div className="section">
          <DegreeStudies locale={locale} degreeStudies={body.degreeStudies} />
          <div className="row section">
            <div className="col-sm-12 col-md-6">
              <Experiences locale={locale} experiences={body.experiences} />
            </div>
            <div className="col-sm-12 col-md-6">
              <Courses locale={locale} courses={body.courses} />
            </div>
          </div>
          <div className="row section print-padding-top-1 ">
            <div className="col-12">
              <SkillsSummary locale={locale} skills={[...body.skills]} />
            </div>
          </div>
        </div>
      </div >
    );
  }
}