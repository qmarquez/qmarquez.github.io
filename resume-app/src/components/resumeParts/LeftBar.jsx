import React from 'react';
import Icon from "../Icon";
import profileImage from '../../assets/profile.jpg';
import argentina from '../../assets/argentina.svg';
import espana from '../../assets/espana.svg';
import usa from '../../assets/usa.svg';
import as from '../../assets/as.svg';
import { Translate, I18n } from 'react-redux-i18n';
import { translation } from '../../i18n/i18n_translations.enum';

export default class extends React.Component {
  renderProfileImage() {
    return (
      <div className="profile-img-container">
        <img className="img-fluid profile-img" src={profileImage} alt="profile" />
      </div>
    );
  }

  renderContact() {
    const contactChannels = {
      printable: [
        {
          title: translation.leftBar.CONTACT_CELLPHONE,
          data: '+5411 3111-8072'
        },
        {
          title: translation.leftBar.CONTACT_EMAIL,
          data: <React.Fragment>qmarquez@<wbr />est.<wbr />frba.<wbr />utn.<wbr />edu.<wbr />ar</React.Fragment>
        }
      ],
      notPrintable: [
        { href: 'https://www.linkedin.com/in/quimarquez/', prefix: 'fab', image: 'linkedin' },
        { href: 'mailto:qmarquez@est.frba.utn.edu.ar', image: 'envelope-square' },
        { href: 'https://github.com/qmarquez', prefix: 'fab', image: 'github' },
        { href: 'https://t.me/qmarquez', prefix: 'fab', image: 'telegram' }
      ]
    }

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
    const careerGoals = [
      {
        en: 'Reach major seniority on web development, mainly using JS based techs',
        es: 'Especializarme a senior de desarrollo full stack principalmente con tecnologías JavaScript'
      },
      {
        en: 'Deepen the ability to guide new teammates in the challenges and projects that integrate',
        es: 'Profundizar la capacidad de guiar a nuevos compañeros de equipo en los distintos desafíos y proyectos que integre'
      },
      {
        en: 'Grows on experience and abilities over aux techs related to to develompent (git, containers, devops)',
        es: 'Adquirir experiencia y habilidades profundas en tecnologías auxiliares a la programación (git, containers, devops)'
      },
      {
        en: 'Keep on training over analysis, design, implementation and good practices at development',
        es: 'Profundizar mi experiencia sobre analisis, diseño, implementaciones y buenas prácticas de desarrollo'
      },
    ];

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
    const whoIAmItems = [
      { en: 'Brave', es: 'Valiente' },
      { en: 'Free', es: 'Libre' },
      { en: 'Partner', es: 'Compañero' },
      { en: 'Fast learning', es: 'Rápido aprendizaje' }
    ];

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
    const basicData = [
      {
        title: { es: 'Fecha de nacimiento', en: 'Birth date' },
        data: { es: '11/03/1994', en: '11/03/1994' }
      },
      {
        title: { es: 'CUIL', en: 'CUIL' },
        data: { es: '20-35991142-5', en: '20-35991142-5' }
      },
      {
        title: { es: 'Residencia', en: 'Residence' },
        data: { es: 'Santos Lugares, Bs.As. Argentina', en: 'Santos Lugares, Bs.As. Argentina' }
      },
      {
        title: { es: 'Intereses y hobbies', en: 'Hobbies and interests' },
        items: {
          icon: 'heartbeat',
          data: [
            { es: 'Arquería, ciclismo y karate', en: 'Archery, cycling, karate' },
            { es: 'Fotografía y viajes', en: 'Photography and travel' },
            { es: 'Desarrollo personal y liderazgo', en: 'Self-knowledge and leadership' },
          ]
        }
      }
    ];

    const renderedBasicData = basicData.map(({ title, data, items }, i) => {
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
    });

    return (
      <React.Fragment>
        {renderedBasicData}
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