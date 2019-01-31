import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogBrowser from './HogBrowser'

import hogs from '../porkers_data';



class App extends Component {

  constructor(props) {
    super();
    this.state = {
      hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <HogBrowser 
            hogs={this.state.hogs}
          />
      </div>
    )
  }
}

export default App;
