import * as React from 'react';
import './App.css';

interface AppValues {
  comp: string;
  result: string;
}

interface AppStates {
  pushed: number;
}

const te = ['グー', 'チョキ', 'パー'];
const listItems = te.map((gcp: string) =>
  <li key={gcp.toString()}><span>{gcp}</span></li>
);

class App extends React.Component<AppValues, AppStates> {
  constructor(props: AppValues) {
    super(props);
    this.state = {
      pushed: 0
    };
  }

  onClick() {
    this.setState({
      pushed: 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p className="Player-title">YOU</p>
          <ul>{listItems}</ul>
          <div>{this.state.pushed ? '1' : '0'}
        <button onClick={() => this.onClick()} />
      </div>
        </div>
        <div>
          <p className="Player-title">COMPUTER</p>
          <p>{this.props.comp}</p>
        </div>
        <div className="Result">
          <p>{this.props.result}</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
