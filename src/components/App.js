import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogBrowser from "./HogBrowser";

import hogs from "../porkers_data";

class App extends Component {
  state = {
    hogs,
    filtered: "all"
  };

  filterHogs = () => {
    const hogs = [...this.state.hogs];

    if (this.state.filtered === "true") {
      return hogs.filter(hog => hog.greased);
    } else {
      return hogs.filter(hog => !hog.greased);
    }
  };

  handleChangeType = event => {
    const value = event.target.value;
    this.setState({ filtered: value });
  };

  handleSortByName = () => {
    const sortedStateByName = this.state.hogs.sort(function(a,b){
      return a.name.localeCompare(b.name);
    })
    this.setState({hogs: sortedStateByName})

  }

  handleSortByWeight = () => {
    const sortedStateByWeight = this.state.hogs.sort(function(a,b){
      return a.weight - b.weight;
    })
    this.setState({hogs: sortedStateByWeight})
    
  }

  render() {
    const hogsToRender =
      this.state.filtered === "all" ? this.state.hogs : this.filterHogs();

    return (
      <div className="App">
        <Nav onChangeType={this.handleChangeType} sortByName={this.handleSortByName} sortByWeight={this.handleSortByWeight} />
        <HogBrowser hogs={hogsToRender} />
      </div>
    );
  }
}

export default App;
