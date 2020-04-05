import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import argentinaFlag from '../assets/argentina.svg';
import usaFlag from '../assets/usa.svg';

import './LaguageSelection.scss';

class LanguageSlection extends React.Component {

  languageAvailables = [
    {
      img: argentinaFlag,
      imgAlt: 'argentina flag',
      text: 'v.Español',
      href: 'es'
    },
    {
      img: usaFlag,
      imgAlt: 'usa flag',
      text: 'v.English',
      href: 'en'
    }
  ]

  renderLaguageOptions() {
    return this.languageAvailables.map(({ img, imgAlt, text, href }, i) => (
      <div key={i} className="col-sm-12 col-md-6 text-center index-main-container">
        <Link to={href}>
          <h1 className="name-header"><img src={img} alt={imgAlt} />
            <div>{text}</div>
          </h1>
        </Link>
      </div>
    ));
  }

  render() {

    return (
      <div className="body vh100">
        <div className="container">
          <div className="row">
            {this.renderLaguageOptions()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LanguageSlection);