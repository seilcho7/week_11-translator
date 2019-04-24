import React from 'react';
import logo from './logo.svg';
import './App.css';

import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      names: ["oakley", "milla", "angela"]
    }

  }

  render() {
    console.log('Rendering App');
    console.log(`Top of App.render, State is now ${this.state.inputText}`);

    return (
      <div className="App">
        <header className="App-header">
          <ul className="List">
            {
              this.state.names.map((n, i) => (
              <li key={i}>{n}</li>))
            }
          </ul>

          <input
            onChange={ this._updateInputText }
          />
          <Output
            text={ this.state.inputText }
          />
          <Output
            text={ this.state.inputText }
            transform="l33t"
          />
        </header>
      </div>
    );
  }

  _updateInputText = (e) => {
    console.log("onChange event fired");
    console.log(e.target.value);

    // This is a request for a change that will take place in the future
    this.setState({
      inputText: e.target.value
    }, () => {
      console.log(`After setState, State is now ${this.state.inputText}`);
    });
  }
}


export default App;