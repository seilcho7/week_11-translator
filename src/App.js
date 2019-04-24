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
    return (
      <div className="App">
        <header className="App-header">
          <input
            onChange={ (e) => {
              console.log("onChange event fired");
              console.log(e.target.value);

              // This is a request for a change that will take place in the future
              this.setState({
                inputText: e.target.value
              }, () => {
                console.log(`After setState, State is not ${this.state.inputText}`)
            });
          } }
          />
          <Output
            text={this.state.inputText}
          />
        </header>
      </div>
    );
  }
}


export default App;