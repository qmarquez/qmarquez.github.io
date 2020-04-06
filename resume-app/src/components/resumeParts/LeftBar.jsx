import React from 'react';
import Icon from "../Icon";
import profileImage from '../../assets/profile.jpg';
import argentina from '../../assets/argentina.svg';
import espana from '../../assets/espana.svg';
import usa from '../../assets/usa.svg';
import as from '../../assets/as.svg';
import { Translate, I18n } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';
import { leftBar } from '../../data';

const { contactChannels, careerGoals, whoIAmItems, basicData } = leftBar;

export default class extends React.Component {
  renderProfileImage() {
    return (
      <div className="profile-img-container">
        <img className="img-fluid profile-img" src={profileImage} alt="profile" />
      </div>
    );
  }

  renderContact() {
    const renderedNoPrintableContact = contactChannels.notPrintable.map(({ href, prefix, image, alt }, i) => (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer">
        <Icon prefix={prefix} icon={image} />
      </a>
    ));

    const renderedPrintableContact = contactChannels.printable.map(({ title, data }, i) => (
      <div key={i} className="primary-data-row not-print-hide">
        <b className="primary-data-title">
          <Translate value={title} />
        </b>
        <br />
        {data}
      </div>
    ));

    return (
      <React.Fragment>
        <div className="primary-data-row contact print-hide">
          <b className="primary-data-title">
            <Translate value={translation.leftBar.CONTACT} />
          </b>
          <br />
          {renderedNoPrintableContact}
        </div>

        {renderedPrintableContact}
      </React.Fragment>
    );
  }

  renderNationalities() {
    return (
      <div className="primary-data-row nationality">
        <b className="primary-data-title">
          <Translate value={translation.leftBar.NATIONALITY} />
        </b>
        <br />
        <img src={argentina} alt={I18n.t(translation.leftBar.NATIONALITY_ARGALT)} />
        <img src={espana} alt={I18n.t(translation.leftBar.NATIONALITY_SPAALT)} />
      </div>
    );
  }

  renderLanguages() {
    return (
      <div className="primary-data-row languages">
        <b className="primary-data-title">
          <Translate value={translation.leftBar.LANGUAGES} />
        </b>
        <br />
        <div className="language">
          <img className="country" src={argentina} alt="Argentina" />
          <br />
          <Translate value={translation.leftBar.LANGUAGES_NATIVE} />
        </div>
        <hr />
        <div className="language">
          <img className="country" src={usa} alt="USA" />
          <br />
          <Translate value={translation.leftBar.LANGUAGES_READ_WRITE} />
          <div className="stars-rate-container">
            <Icon className="icon" icon="star" />
            <Icon className="icon" icon="star" />
            <Icon className="icon" icon="star" />
            <Icon className="icon" icon="star" />
            <Icon className="icon" prefix="far" icon="star" />
          </div>
          <Translate value={translation.leftBar.LANGUAGES_SPEAK} />
          <div className="stars-rate-container">
            <Icon className="icon" icon="star" />
            <Icon className="icon" icon="star" />
            <Icon className="icon" icon="star" />
            <Icon className="icon" prefix="far" icon="star" />
            <Icon className="icon" prefix="far" icon="star" />
          </div>
        </div>
      </div>);
  }

  renderCareerGoals() {
    const renderedGoals = careerGoals.map((goal, i) => (
      <div key={i} className="section-list-item">
        <Icon className="section-target" icon='bullseye' />
        <span className="top-text">{goal[this.props.locale]}</span>
      </div>
    ));

    return (
      <div>
        <b className="primary-data-title">
          <Translate value={translation.leftBar.CAREER_GOALS} />
        </b>
        {renderedGoals}
      </div>
    );
  }

  renderWhoIAm() {
    const renderedWhoIAmItems = whoIAmItems.map((item, i) => (
      <div key={i} className="section-list-item">
        <img className="section-target" src={as} alt="X" /> {item[this.props.locale]}
      </div>
    ));

    return (
      <div>
        <b className="primary-data-title">
          <Translate value={translation.leftBar.WHOIAM} />
        </b>
        <br />
        <Translate value={translation.leftBar.WHOIAM_SUBTITLE} />
        {renderedWhoIAmItems}
      </div>
    );
  }

  renderBasicData() {
    return (
      <React.Fragment>
        {
          basicData.map(({ title, data, items }, i) => {
            const { locale } = this.props;

            const renderedData = items ?
              items.data.map(
                (data, j) => (
                  <div key={j} className="hobbie-or-interest-container">
                    <Icon className="hobbie-or-interest" icon={items.icon} />
                    <span className="top-text">{data[locale]}</span>
                  </div>
                )
              )
              : <span className="top-text">{data[locale]}</span>;

            return (
              <div key={i} className="secondary-data-row">
                <div className="secondary-data-title">{title[locale]}</div>
                {renderedData}
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-5 col-md-4 personal-data">
        {this.renderProfileImage()}
        {this.renderContact()}
        {this.renderNationalities()}
        {this.renderLanguages()}
        {this.renderCareerGoals()}
        {this.renderWhoIAm()}
        <hr />
        {this.renderBasicData()}
      </div>
    );
  }
}