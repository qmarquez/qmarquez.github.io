import React from 'react';
import { Translate } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';

export default ({ locale, courses }) => {
  return (
    <React.Fragment>
      <div className="section-title">
        <Translate value={translation.body.COURSES} />
      </div>
      {
        locale && courses.map(
          (course, i) => {
            const { time, title, href, extra } = course[locale];
            return (
              <div key={i}>
                <span className="section-time">{time} </span>
                {
                  href ?
                    <a href={href}>{title}</a>
                    : <span>{title}</span>
                }
                {extra}
              </div>
            );
          }
        )
      }
    </React.Fragment>
  );
}