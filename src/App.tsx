import * as React from 'react';
import './App.css';

interface CompState {
    value: string;
}

class App extends React.Component<{comp: string}, CompState> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <li>グー</li>
          <li>チョキ</li>
          <li>パー</li>
        </ul>
        <div>{this.props.comp}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
