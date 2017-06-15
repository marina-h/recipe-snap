import './shim' // hack for using rn-nodify
import React, { Component } from 'react';

import Main from './src/'

export default class App extends Component {
  render() {
    return (
      <Main />
    )
  }
}
