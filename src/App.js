import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppService from './services/AppService.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.appService = new AppService();

    // Initialize App state
    this.state = {
      mode: '',
      msg: ''
    }
  }



  async componentDidMount() {

    // Call service to add  new entry to db
    const data = await this.appService.getCitmDataJson('citmData.json');
    console.log('SERVICE RETURN:', data);
    if (data) {
      console.log('msg: ', data.msg);
      this.setState({mode: data.mode})
      this.setState({msg: data.msg})

    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          MODE IS: {this.state.mode}
        </p>
        <p>
          MESSAGE IS: {this.state.msg}
        </p>
      </div>
    );
  }
}

export default App;
