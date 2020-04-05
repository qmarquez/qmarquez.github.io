import React from 'react';
import Icon from "../Icon";
import { Translate } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';

export default ({ locale, experiences }) => {
  return (
    <React.Fragment>
      <div className="section-title">
        <Translate value={translation.body.EXPERIENCE} />
      </div>
      {
        locale && experiences.map((experience, i) => {
          const { timelapse, title, link, skills } = experience[locale];

          return (
            <div key={i} className="section-experience-container">
              <span className="section-time">{timelapse}</span> {title}
              <br />
              {
                link && <a href={link.href} className="section-expirience-reference print-hide" >{link.text}<Icon className="section-expirience-reference-image" icon='external-link-alt' /></a>
              }
              <div className="section-experience-skills">
                {
                  skills.map(
                    (skill, i) => (
                      <React.Fragment key={i}>
                        <Icon className="section-work-activity" icon="tools" />
                        {skill}
                        <br />
                      </React.Fragment>
                    )
                  )
                }
              </div>
            </div>
          );
        })
      }
    </React.Fragment>
  );
}
