import React from 'react';
import { withRouter } from 'react-router-dom';
import { setLocale } from 'react-redux-i18n';

import './Resume.scss'

import decorate from './decorators/decorate';
import connect from './decorators/connect';

import Header from './resumeParts/Header';
import LeftBar from './resumeParts/LeftBar';
import Footer from './resumeParts/Footer';
import MainBody from './resumeParts/MainBody';

@connect()
@decorate(withRouter)
class Resume extends React.Component {

  state = { locale: '' };
  static mapDispatchToProps = { setLocale }

  componentDidMount() {
    const { locale } = this.props;
    if (locale) {
      this.props.setLocale(locale);
      this.setState({ locale });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
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