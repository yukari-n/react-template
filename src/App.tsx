import * as React from 'react';
import './App.css';

interface AppValues {
  comp: string;
  result: string;
}

interface AppStates {
  value: string;
}

const te = ['グー', 'チョキ', 'パー'];
const listItems = te.map((gcp: string) =>
  <li key={gcp.toString()}>{gcp}</li>
);

class App extends React.Component<AppValues, AppStates> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p className="Player-title">YOU</p>
          <ul>{listItems}</ul>
        </div>
        <div>
          <p className="Player-title">COMPUTER</p>
          <p>{this.props.comp}</p>
        </div>
        <div className="Result">
          {this.props.result}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
