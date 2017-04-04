import React, { Component } from 'react';
import Header from './header';
import Dropdown from './dropdown';
import CheesesPlayerRow from './cheeses-player-row';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dropdown />
        <CheesesPlayerRow />

      </div>
    );
  }
}
