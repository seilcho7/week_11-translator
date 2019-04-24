import React from 'react';
import logo from './logo.svg';
import './App.css';

import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    }

  }

  render() {
    console.log('Rendering App');
    console.log(`Top of App.render, State is now ${this.state.inputText}`);
    const names = ["oakley", "milla", "angela"];

    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {
              names.map(n => <li>{n}</li>)
            }
          </ul>

          {/* <input
            onChange={ this._updateInputText }
          /> */}
          {/* <Output
            text={ this.state.inputText }
          /> */}

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
      console.log(`After setState, State is not ${this.state.inputText}`);
    });
  }
}


export default App;