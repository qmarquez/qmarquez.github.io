import React from 'react';
import { Translate } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';

export default ({ locale, degreeStudies }) => {
  return (
    <React.Fragment>
      <div className="section-title">
        <Translate value={translation.body.DEGREESTUDIES} />
      </div>
      {
        locale && degreeStudies.map(
          (study, i) => {
            const { title, timelapse } = study[locale];
            return (
              <div key={i}>
                <span className="section-time">{timelapse}:</span> {title}
              </div>
            );
          }
        )
      }

    </React.Fragment>
  );
}