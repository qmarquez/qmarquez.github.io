import React from 'react';
import { Link } from "react-router-dom";
import Icon from "../Icon";
import { Translate } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';

export default () => {
  return (
    <div className="col-12 print-padding-top-1">
      <h1 className="resume-name-header">
        <Link to="/">
          <Icon className="go-back print-hide" icon='chevron-left' />
        </Link>
            Quimey Lucas Marquez
      </h1>
      <div className="sub-title-header">
        <Translate value={translation.HEADER_SUBTITLE} />
      </div>
    </div>
  );
}