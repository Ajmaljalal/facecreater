import React, { Component } from 'react';
import Home from './containers/genLayouts';
import '../src/assets/styles/master.scss';

class App extends Component {
  render() {
    return (
      <div className="facecreater">
        <Home />

      </div>
    );
  }
}

export default App;
