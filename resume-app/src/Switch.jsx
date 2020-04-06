import React from 'react';
import { withRouter, Switch as RRDSwitch, Route } from 'react-router-dom';
import { parse } from 'querystring';

import decorate from './components/decorators/decorate';
import Resume from './components/Resume';
import LanguageSelection from './components/LaguageSelection';

@decorate(withRouter)
class Switch extends React.Component {
  render() {
    const [, search] = this.props.location.search.split('?');
    const { locale } = parse(search);

    return (
      <RRDSwitch>
        {
          locale ?
            <Route exact path="/" component={() => <Resume locale={locale} />} />
            : <Route exact path="/" component={LanguageSelection} />
        }
        {/* <Route component={Error404Component} /> */}
      </RRDSwitch >
    );
  }
}

export default Switch;