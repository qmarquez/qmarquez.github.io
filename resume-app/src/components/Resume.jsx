import React from 'react';
import { setLocale } from 'react-redux-i18n';

import './Resume.scss'

import connect from './decorators/connect';

import Header from './resumeParts/Header';
import LeftBar from './resumeParts/LeftBar';
import Footer from './resumeParts/Footer';
import MainBody from './resumeParts/MainBody';

@connect()
class Resume extends React.Component {

  state = { locale: '' };
  static mapDispatchToProps = { setLocale }

  componentDidMount() {
    this.changeLocale('es');
  }

  changeLocale = (locale) => {
    this.setState({ locale });
    this.props.setLocale(locale);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header
            locale={this.state.locale}
            onChangeLocale={this.changeLocale} />
        </div>

        <div className="row">
          <LeftBar locale={this.state.locale} />
          <MainBody locale={this.state.locale} />
        </div>

        <div className="row footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Resume;