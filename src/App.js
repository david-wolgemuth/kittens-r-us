import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HOME_VIEW, Home } from './components/Home';
import { SUBMIT_KITTEN_VIEW, SubmitKitten } from './components/SubmitKitten';
import { AlertContainer } from './components/AlertContainer/AlertContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentView: HOME_VIEW, alertContent: null };
  }
  changeCurrentView = (view) => {
    this.setState({ ...this.state, currentView: view });
  }
  displayAlert = (alertContent) => {
    this.setState({ ...this.state, alertContent });
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kittens-R-Us</h1>
        </header>
        <div className="App-intro">
          {
            this.state.currentView === HOME_VIEW &&
              <Home changeCurrentView={this.changeCurrentView} />
          }
          {
            this.state.currentView === SUBMIT_KITTEN_VIEW &&
              <SubmitKitten changeCurrentView={this.changeCurrentView} displayAlert={this.displayAlert} />
          }
        </div>
        <AlertContainer>{ this.state.alertContent }</AlertContainer>
      </div>
    );
  }
}

export default App;
