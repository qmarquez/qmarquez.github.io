import React from 'react';
import { Translate } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';

export default () => {
  return (
    <div className="footer">
      <p>
        <Translate value={translation.footer.LASTUPDATE} date="01/2020" />
      </p>
      <p>
        <Translate className="not-print-hide" value={translation.footer.ONLINEVERSIONLABEL} />
      </p>
    </div>
  );
}