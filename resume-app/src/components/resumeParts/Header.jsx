import React from 'react';
import { Translate } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';
import { ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { availablesLanguages } from '../../data';

export default ({ locale: selectedLocale, onChangeLocale }) => {
  console.log(selectedLocale)
  return (
    <React.Fragment>
      <div className="col-12 print-padding-top-1">
        <h1 className="resume-name-header">Quimey Lucas Marquez</h1>
        <div className="sub-title-header">
          <Translate value={translation.HEADER_SUBTITLE} />
        </div>
      </div>
      <div className="col-12 print-hide button-toolbar">
        <ButtonToolbar>
          {
            availablesLanguages.map(
              ({ img, imgAlt, locale }, i) => (
                <ButtonGroup toggle key={i} >
                  <Button
                    variant="dark"
                    className={`language-selector ${selectedLocale === locale ? 'laguage-selected' : ''}`}
                    onClick={() => onChangeLocale(locale)}>
                    <img src={img} alt={imgAlt} />
                  </Button>
                </ButtonGroup>
              )
            )
          }
        </ButtonToolbar>
      </div>
    </React.Fragment>
  );
}