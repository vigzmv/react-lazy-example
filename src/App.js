import React, { Component } from 'react';
import './App.css';
import Header from './Header';
class App extends Component {
  state = {
    showLogo: false,
  };

  showLogo = () => {
    this.setState({
      showLogo:true
    })
  }
  render() {
    const { showLogo } = this.state;

    return (
      <div className="App">
        {showLogo ? <Header /> : <button onClick={this.showLogo}>Press Me!!</button>}
      </div>
    );
  }
}

export default App;
