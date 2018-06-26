import React, { Component, Fragment } from 'react';
import Toggle from './ToggleRPC';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle >
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1> h1 </h1>}
              <button onClick={() => toggle()}> Show/Hide h1 </button>
            </Fragment>
          )}
        </Toggle>
        <Toggle >
          {({ on, toggle }) => (
            <Fragment>
              {on && <h2> h2 </h2>}
              <button onClick={() => toggle()}> Show/Hide h2 </button>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
